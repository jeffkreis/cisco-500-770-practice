const storeKey = "asnsp-500-770-scores-v2";

function loadScores() {
  try { return JSON.parse(localStorage.getItem(storeKey)) || {}; }
  catch { return {}; }
}
function saveScores(scores) {
  localStorage.setItem(storeKey, JSON.stringify(scores));
}

const state = { view: "home", setId: null, index: 0, picks: [], scores: loadScores() };

function scoreFor(id) {
  const row = state.scores[id];
  return row ? row.best : null;
}

function renderOverall() {
  const done = QUIZ.sets.filter((set) => scoreFor(set.id) !== null).length;
  const answered = QUIZ.sets.reduce((sum, set) => sum + (state.scores[set.id]?.best || 0), 0);
  const possible = done * 10;
  document.getElementById("overall").innerHTML =
    `<strong>${done}/20</strong><span>sets finished${possible ? ` · best answers ${answered}/${possible}` : ""}</span>`;
}

function el(html) {
  const node = document.createElement("div");
  node.innerHTML = html.trim();
  return node.firstChild;
}

function home() {
  const days = [...new Set(QUIZ.sets.map((set) => set.day))];
  const root = document.createElement("div");
  days.forEach((day) => {
    const block = document.createElement("section");
    block.className = "day";
    block.innerHTML = `<h2>${day}</h2>`;
    const grid = document.createElement("div");
    grid.className = "grid";
    QUIZ.sets.filter((set) => set.day === day).forEach((set) => {
      const best = scoreFor(set.id);
      const button = el(`<button class="card" type="button">
        <div class="set-no">Set ${set.id} of 20</div>
        <h3>${set.title}</h3>
        <div class="meta">${best === null ? "Not started" : `Best score ${best}/10`}</div>
        <div class="bar"><i style="width:${best === null ? 0 : best * 10}%"></i></div>
      </button>`);
      button.addEventListener("click", () => startSet(set.id));
      grid.appendChild(button);
    });
    block.appendChild(grid);
    root.appendChild(block);
  });
  return root;
}

function currentSet() {
  return QUIZ.sets.find((set) => set.id === state.setId);
}

function startSet(id) {
  state.view = "quiz";
  state.setId = id;
  state.index = 0;
  state.picks = Array(10).fill(null);
  draw();
}

function quizView() {
  const set = currentSet();
  const question = set.questions[state.index];
  const root = document.createElement("section");
  root.innerHTML = `
    <div class="quiz-head">
      <div>
        <div class="set-no">${set.day} · Set ${set.id}</div>
        <h2 style="font-family:Palatino,serif;font-weight:500;margin:4px 0 0;">${set.title}</h2>
      </div>
      <button class="ghost" type="button" id="backHome">All sets</button>
    </div>`;
  const dots = document.createElement("div");
  dots.className = "dots";
  set.questions.forEach((_, i) => {
    const dot = el(`<button class="dot ${i === state.index ? "on" : ""} ${state.picks[i] !== null && i !== state.index ? "done" : ""}" type="button">${i + 1}</button>`);
    dot.addEventListener("click", () => { state.index = i; draw(); });
    dots.appendChild(dot);
  });
  root.appendChild(dots);
  const prompt = document.createElement("h3");
  prompt.className = "prompt";
  prompt.textContent = `${state.index + 1}. ${question.q}`;
  root.appendChild(prompt);
  const choices = document.createElement("div");
  choices.className = "choices";
  question.choices.forEach((choice, i) => {
    const button = el(`<button class="choice ${state.picks[state.index] === i ? "picked" : ""}" type="button"><span class="letter">${"ABCD"[i]}</span><span></span></button>`);
    button.querySelector("span:last-child").textContent = choice;
    button.addEventListener("click", () => {
      state.picks[state.index] = i;
      if (state.index < 9) state.index += 1;
      draw();
    });
    choices.appendChild(button);
  });
  root.appendChild(choices);
  const hint = document.createElement("p");
  hint.className = "meta";
  hint.textContent = "One best answer. Keys 1 through 4 select A through D. You score this set of ten before moving on.";
  root.appendChild(hint);
  const nav = document.createElement("div");
  nav.className = "nav";
  const prev = el(`<button class="ghost" type="button">Previous</button>`);
  const next = el(`<button class="primary" type="button">${state.index === 9 ? "Score this set" : "Next"}</button>`);
  prev.disabled = state.index === 0;
  prev.addEventListener("click", () => { state.index -= 1; draw(); });
  next.addEventListener("click", () => {
    if (state.index < 9) { state.index += 1; draw(); return; }
    const missed = state.picks.filter((pick) => pick === null).length;
    if (missed && !confirm(`${missed} question${missed > 1 ? "s are" : " is"} unanswered and will be marked wrong. Score the set?`)) return;
    finishSet();
  });
  nav.append(prev, next);
  root.appendChild(nav);
  root.querySelector("#backHome").addEventListener("click", () => { state.view = "home"; draw(); });
  return root;
}

function finishSet() {
  const set = currentSet();
  const correct = set.questions.reduce((sum, question, i) => sum + (state.picks[i] === question.answer ? 1 : 0), 0);
  const prior = state.scores[set.id]?.best ?? -1;
  state.scores[set.id] = {
    best: Math.max(prior, correct),
    last: correct,
    picks: state.picks.slice(),
    at: new Date().toISOString()
  };
  saveScores(state.scores);
  state.view = "result";
  state.lastCorrect = correct;
  draw();
}

function resultView() {
  const set = currentSet();
  const root = document.createElement("section");
  root.innerHTML = `
    <div class="result-head">
      <div>
        <div class="set-no">${set.day} · Set ${set.id}</div>
        <p class="scoreline">${state.lastCorrect}/10</p>
        <p class="meta">${set.title}</p>
      </div>
      <div>
        <button class="ghost" type="button" id="retry">Try again</button>
        <button class="primary" type="button" id="done">All sets</button>
      </div>
    </div>`;
  const review = document.createElement("div");
  review.className = "review";
  set.questions.forEach((question, i) => {
    const pick = state.picks[i];
    const right = pick === question.answer;
    const item = document.createElement("article");
    item.className = `item ${right ? "right" : "wrong"}`;
    const yours = pick === null ? "Not answered" : question.choices[pick];
    const title = document.createElement("strong");
    title.textContent = `${i + 1}. ${question.q}`;
    const yoursLine = document.createElement("p");
    yoursLine.textContent = `Your answer: ${yours}`;
    const bestLine = document.createElement("p");
    bestLine.textContent = `Best answer: ${question.choices[question.answer]}`;
    const whyLine = document.createElement("p");
    whyLine.className = "why";
    whyLine.textContent = question.why;
    item.append(title, yoursLine, bestLine, whyLine);
    review.appendChild(item);
  });
  root.appendChild(review);
  root.querySelector("#retry").addEventListener("click", () => startSet(set.id));
  root.querySelector("#done").addEventListener("click", () => { state.view = "home"; draw(); });
  return root;
}

function draw() {
  renderOverall();
  const app = document.getElementById("app");
  app.replaceChildren(state.view === "quiz" ? quizView() : state.view === "result" ? resultView() : home());
  window.scrollTo(0, 0);
}

document.addEventListener("keydown", (event) => {
  if (state.view !== "quiz") return;
  const number = "1234".indexOf(event.key);
  if (number >= 0) {
    state.picks[state.index] = number;
    if (state.index < 9) state.index += 1;
    draw();
  }
});

draw();
