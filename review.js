const storeKey = "asnsp-review-scores";

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

function resetSet(id) {
  if (scoreFor(id) === null) return;
  if (!confirm("Clear this set so it shows as not answered?")) return;
  delete state.scores[id];
  saveScores(state.scores);
  if (state.setId === id) {
    state.view = "home";
    state.setId = null;
    state.picks = [];
  }
  draw();
}

function currentSet() {
  return REVIEW.sets.find((set) => set.id === state.setId);
}

function sameAnswers(question, pick) {
  const chosen = [...(pick || [])].sort((a, b) => a - b);
  const wanted = [...question.answers].sort((a, b) => a - b);
  return chosen.length === wanted.length && chosen.every((value, i) => value === wanted[i]);
}

function renderOverall() {
  const done = REVIEW.sets.filter((set) => scoreFor(set.id) !== null).length;
  const answered = REVIEW.sets.reduce((sum, set) => sum + (state.scores[set.id]?.best || 0), 0);
  const possible = REVIEW.sets.reduce((sum, set) => sum + (scoreFor(set.id) === null ? 0 : set.questions.length), 0);
  document.getElementById("overall").textContent = "";
  const strong = document.createElement("strong");
  strong.textContent = `${done}/${REVIEW.sets.length}`;
  const span = document.createElement("span");
  span.textContent = possible ? `sets finished · best answers ${answered}/${possible}` : "sets finished";
  document.getElementById("overall").append(strong, span);
}

function el(html) {
  const node = document.createElement("div");
  node.innerHTML = html.trim();
  return node.firstChild;
}

function home() {
  const days = [...new Set(REVIEW.sets.map((set) => set.day))];
  const root = document.createElement("div");
  days.forEach((day) => {
    const block = document.createElement("section");
    block.className = "day";
    const heading = document.createElement("h2");
    heading.textContent = day;
    block.appendChild(heading);
    const grid = document.createElement("div");
    grid.className = "grid";
    REVIEW.sets.filter((set) => set.day === day).forEach((set) => {
      const best = scoreFor(set.id);
      const total = set.questions.length;
      const card = el(`<article class="card">
        <div class="set-no"></div>
        <h3></h3>
        <div class="meta"></div>
        <div class="bar"><i></i></div>
        <div class="card-actions"><button class="ghost reset" type="button">Reset</button></div>
      </article>`);
      card.querySelector(".set-no").textContent = `Set ${set.id} of ${REVIEW.sets.length}`;
      card.querySelector("h3").textContent = set.title;
      card.querySelector(".meta").textContent = best === null
        ? `${total} question${total === 1 ? "" : "s"}`
        : `Best score ${best}/${total}`;
      card.querySelector(".bar i").style.width = best === null ? "0%" : `${(best / total) * 100}%`;
      const reset = card.querySelector(".reset");
      reset.disabled = best === null;
      reset.addEventListener("click", (event) => {
        event.stopPropagation();
        resetSet(set.id);
      });
      card.addEventListener("click", () => startSet(set.id));
      grid.appendChild(card);
    });
    block.appendChild(grid);
    root.appendChild(block);
  });
  return root;
}

function startSet(id) {
  const set = REVIEW.sets.find((item) => item.id === id);
  state.view = "quiz";
  state.setId = id;
  state.index = 0;
  state.picks = set.questions.map(() => []);
  draw();
}

function chosenText(question, pick) {
  if (!pick || pick.length === 0) return "Not answered";
  return [...pick].sort((a, b) => a - b).map((i) => `${"ABCDE"[i]}. ${question.choices[i]}`).join("  ·  ");
}

function quizView() {
  const set = currentSet();
  const question = set.questions[state.index];
  const multi = question.answers.length > 1;
  const last = state.index === set.questions.length - 1;
  const root = document.createElement("section");
  const head = document.createElement("div");
  head.className = "quiz-head";
  const titles = document.createElement("div");
  const kicker = document.createElement("div");
  kicker.className = "set-no";
  kicker.textContent = `${set.day} · Set ${set.id}`;
  const heading = document.createElement("h2");
  heading.style.cssText = "font-family:Palatino,serif;font-weight:500;margin:4px 0 0;";
  heading.textContent = set.title;
  titles.append(kicker, heading);
  if (set.blurb && state.index === 0) {
    const blurb = document.createElement("p");
    blurb.className = "blurb";
    blurb.textContent = set.blurb;
    titles.appendChild(blurb);
  }
  const back = document.createElement("button");
  back.className = "ghost";
  back.type = "button";
  back.textContent = "All sets";
  back.addEventListener("click", () => { state.view = "home"; draw(); });
  head.append(titles, back);
  root.appendChild(head);

  const dots = document.createElement("div");
  dots.className = "dots";
  set.questions.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    if (i === state.index) dot.classList.add("on");
    if ((state.picks[i] || []).length && i !== state.index) dot.classList.add("done");
    dot.textContent = String(i + 1);
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
  const selected = state.picks[state.index] || [];
  question.choices.forEach((choice, i) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    if (selected.includes(i)) button.classList.add("picked");
    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = "ABCDE"[i];
    const label = document.createElement("span");
    label.textContent = choice;
    button.append(letter, label);
    button.addEventListener("click", () => choose(i));
    choices.appendChild(button);
  });
  root.appendChild(choices);

  const hint = document.createElement("p");
  hint.className = "meta";
  hint.textContent = multi
    ? "Choose two. Keys 1 through 5 toggle A through E. Score this set before you leave it."
    : "One best answer. Keys 1 through 4 select A through D. Score this set before you leave it.";
  root.appendChild(hint);

  const nav = document.createElement("div");
  nav.className = "nav";
  const prev = document.createElement("button");
  prev.className = "ghost";
  prev.type = "button";
  prev.textContent = "Previous";
  prev.disabled = state.index === 0;
  prev.addEventListener("click", () => { state.index -= 1; draw(); });
  const next = document.createElement("button");
  next.className = "primary";
  next.type = "button";
  next.textContent = last ? "Score this set" : "Next";
  next.addEventListener("click", () => {
    if (!last) { state.index += 1; draw(); return; }
    const missed = set.questions.filter((item, i) => (state.picks[i] || []).length !== item.answers.length).length;
    if (missed && !confirm(`${missed} question${missed > 1 ? "s are" : " is"} incomplete and will be marked wrong. Score the set?`)) return;
    finishSet();
  });
  nav.append(prev, next);
  root.appendChild(nav);
  return root;
}

function choose(choice) {
  const set = currentSet();
  const question = set.questions[state.index];
  const current = state.picks[state.index] || [];
  if (question.answers.length === 1) {
    state.picks[state.index] = [choice];
    if (state.index < set.questions.length - 1) state.index += 1;
  } else if (current.includes(choice)) {
    state.picks[state.index] = current.filter((value) => value !== choice);
  } else if (current.length < question.answers.length) {
    state.picks[state.index] = current.concat(choice);
  }
  draw();
}

function finishSet() {
  const set = currentSet();
  const correct = set.questions.reduce((sum, question, i) => sum + (sameAnswers(question, state.picks[i]) ? 1 : 0), 0);
  const prior = state.scores[set.id]?.best ?? -1;
  state.scores[set.id] = {
    best: Math.max(prior, correct),
    last: correct,
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
  const head = document.createElement("div");
  head.className = "result-head";
  const titles = document.createElement("div");
  const kicker = document.createElement("div");
  kicker.className = "set-no";
  kicker.textContent = `${set.day} · Set ${set.id}`;
  const score = document.createElement("p");
  score.className = "scoreline";
  score.textContent = `${state.lastCorrect}/${set.questions.length}`;
  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = set.title;
  titles.append(kicker, score, meta);
  const actions = document.createElement("div");
  const retry = document.createElement("button");
  retry.className = "ghost";
  retry.type = "button";
  retry.id = "retry";
  retry.textContent = "Try again";
  const done = document.createElement("button");
  done.className = "primary";
  done.type = "button";
  done.id = "done";
  done.textContent = "All sets";
  const reset = document.createElement("button");
  reset.className = "ghost reset";
  reset.type = "button";
  reset.textContent = "Reset";
  reset.addEventListener("click", () => resetSet(set.id));
  actions.append(reset, retry, done);
  head.append(titles, actions);
  root.appendChild(head);

  const review = document.createElement("div");
  review.className = "review";
  set.questions.forEach((question, i) => {
    const pick = state.picks[i];
    const right = sameAnswers(question, pick);
    const item = document.createElement("article");
    item.className = `item ${right ? "right" : "wrong"}`;
    const title = document.createElement("strong");
    title.textContent = `${i + 1}. ${question.q}`;
    const yours = document.createElement("p");
    yours.textContent = `Your answer: ${chosenText(question, pick)}`;
    const best = document.createElement("p");
    best.textContent = `Best answer: ${chosenText(question, question.answers)}`;
    const why = document.createElement("p");
    why.className = "why";
    why.textContent = question.why;
    item.append(title, yours, best, why);
    review.appendChild(item);
  });
  root.appendChild(review);
  retry.addEventListener("click", () => startSet(set.id));
  done.addEventListener("click", () => { state.view = "home"; draw(); });
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
  const number = "12345".indexOf(event.key);
  if (number < 0) return;
  const question = currentSet().questions[state.index];
  if (number >= question.choices.length) return;
  choose(number);
});

draw();
