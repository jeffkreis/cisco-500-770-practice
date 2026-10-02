const storeKey = "asnsp-exam-60-scores";

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
  return EXAM.sets.find((set) => set.id === state.setId);
}

function displayOutcomes(question) {
  const outcomes = question.pairs.map((pair) => pair.outcome);
  const count = outcomes.length;
  return outcomes.map((_, i) => outcomes[(i + 1) % count]);
}

function matchTargets(question) {
  const count = question.pairs.length;
  return question.pairs.map((_, concept) => (concept + count - 1) % count);
}

function isChoice(question) {
  return question.kind !== "match";
}

function isComplete(question, pick) {
  if (!isChoice(question)) return question.pairs.every((_, i) => pick && pick[i] !== null && pick[i] !== undefined);
  return (pick || []).length === question.answers.length;
}

function isRight(question, pick) {
  if (!isChoice(question)) {
    const wanted = matchTargets(question);
    return wanted.every((value, i) => pick && pick[i] === value);
  }
  const chosen = [...(pick || [])].sort((a, b) => a - b);
  const wanted = [...question.answers].sort((a, b) => a - b);
  return chosen.length === wanted.length && chosen.every((value, i) => value === wanted[i]);
}

function renderOverall() {
  const done = EXAM.sets.filter((set) => scoreFor(set.id) !== null).length;
  const answered = EXAM.sets.reduce((sum, set) => sum + (state.scores[set.id]?.best || 0), 0);
  const possible = EXAM.sets.reduce((sum, set) => sum + (scoreFor(set.id) === null ? 0 : set.questions.length), 0);
  const box = document.getElementById("overall");
  box.textContent = "";
  const strong = document.createElement("strong");
  strong.textContent = `${done}/${EXAM.sets.length}`;
  const span = document.createElement("span");
  if (done === EXAM.sets.length) {
    span.textContent = `sets finished · best answers ${answered}/60${answered >= 45 ? " · at the 45/60 practice mark" : ""}`;
  } else {
    span.textContent = possible ? `sets finished · best answers ${answered}/${possible}` : "sets finished";
  }
  box.append(strong, span);
}

function el(html) {
  const node = document.createElement("div");
  node.innerHTML = html.trim();
  return node.firstChild;
}

function home() {
  const root = document.createElement("div");
  const block = document.createElement("section");
  block.className = "day";
  const heading = document.createElement("h2");
  heading.textContent = "Six sets of ten";
  block.appendChild(heading);
  const grid = document.createElement("div");
  grid.className = "grid";
  EXAM.sets.forEach((set) => {
    const best = scoreFor(set.id);
    const total = set.questions.length;
    const card = el(`<article class="card">
      <div class="set-no"></div>
      <h3></h3>
      <div class="meta"></div>
      <div class="bar"><i></i></div>
      <div class="card-actions"><button class="ghost reset" type="button">Reset</button></div>
    </article>`);
    card.querySelector(".set-no").textContent = `Set ${set.id} of ${EXAM.sets.length}`;
    card.querySelector("h3").textContent = set.day;
    card.querySelector(".meta").textContent = best === null ? set.title : `Best score ${best}/${total}`;
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
  return root;
}

function startSet(id) {
  const set = EXAM.sets.find((item) => item.id === id);
  state.view = "quiz";
  state.setId = id;
  state.index = 0;
  state.picks = set.questions.map((question) => (isChoice(question) ? [] : question.pairs.map(() => null)));
  draw();
}

function answerText(question, pick) {
  if (!isChoice(question)) {
    return question.pairs.map((pair, i) => {
      const index = pick ? pick[i] : null;
      const outcome = index === null || index === undefined ? "Not matched" : displayOutcomes(question)[index];
      return `${pair.concept} → ${outcome}`;
    }).join("\n");
  }
  if (!pick || pick.length === 0) return "Not answered";
  return [...pick].sort((a, b) => a - b).map((i) => `${"ABCDE"[i]}. ${question.choices[i]}`).join("  ·  ");
}

function bestText(question) {
  if (!isChoice(question)) {
    return question.pairs.map((pair) => `${pair.concept} → ${pair.outcome}`).join("\n");
  }
  return answerText(question, question.answers);
}

function quizView() {
  const set = currentSet();
  const question = set.questions[state.index];
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
  heading.textContent = question.domain;
  titles.append(kicker, heading);
  const back = document.createElement("button");
  back.className = "ghost";
  back.type = "button";
  back.textContent = "All sets";
  back.addEventListener("click", () => { state.view = "home"; draw(); });
  head.append(titles, back);
  root.appendChild(head);

  const dots = document.createElement("div");
  dots.className = "dots";
  set.questions.forEach((item, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    if (i === state.index) dot.classList.add("on");
    if (isComplete(item, state.picks[i]) && i !== state.index) dot.classList.add("done");
    dot.textContent = String(i + 1);
    dot.addEventListener("click", () => { state.index = i; draw(); });
    dots.appendChild(dot);
  });
  root.appendChild(dots);

  const prompt = document.createElement("h3");
  prompt.className = "prompt";
  prompt.textContent = `${state.index + 1}. ${question.q}`;
  root.appendChild(prompt);

  if (isChoice(question)) {
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
  } else {
    root.appendChild(matchBoard(question));
  }

  const hint = document.createElement("p");
  hint.className = "meta";
  hint.textContent = hintFor(question);
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
    const missed = set.questions.filter((item, i) => !isComplete(item, state.picks[i])).length;
    if (missed && !confirm(`${missed} question${missed > 1 ? "s are" : " is"} incomplete and will be marked wrong. Score the set?`)) return;
    finishSet();
  });
  nav.append(prev, next);
  root.appendChild(nav);
  return root;
}

function hintFor(question) {
  if (!isChoice(question)) return "Match every concept to one outcome. Each outcome is used once. Score this set before you leave it.";
  if (question.answers.length === 1) return "One best answer. Keys 1 through 5 select A through E. Score this set before you leave it.";
  if (question.answers.length === 2) return "Choose two. Keys 1 through 5 toggle A through E. Score this set before you leave it.";
  return "Choose three. Keys 1 through 5 toggle A through E. Score this set before you leave it.";
}

function matchBoard(question) {
  const board = document.createElement("div");
  board.className = "match";
  const pick = state.picks[state.index];
  const outcomes = displayOutcomes(question);
  question.pairs.forEach((pair, concept) => {
    const row = document.createElement("div");
    row.className = "match-row";
    const label = document.createElement("p");
    label.textContent = pair.concept;
    const choices = document.createElement("div");
    choices.className = "choices";
    outcomes.forEach((outcome, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      if (pick[concept] === index) button.classList.add("picked");
      const taken = pick.some((value, other) => other !== concept && value === index);
      if (taken) button.disabled = true;
      const letter = document.createElement("span");
      letter.className = "letter";
      letter.textContent = String(index + 1);
      const text = document.createElement("span");
      text.textContent = outcome;
      button.append(letter, text);
      button.addEventListener("click", () => chooseMatch(concept, index));
      choices.appendChild(button);
    });
    row.append(label, choices);
    board.appendChild(row);
  });
  return board;
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

function chooseMatch(concept, index) {
  const pick = state.picks[state.index].slice();
  pick[concept] = pick[concept] === index ? null : index;
  state.picks[state.index] = pick;
  draw();
}

function finishSet() {
  const set = currentSet();
  const correct = set.questions.reduce((sum, question, i) => sum + (isRight(question, state.picks[i]) ? 1 : 0), 0);
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
    const right = isRight(question, pick);
    const item = document.createElement("article");
    item.className = `item ${right ? "right" : "wrong"}`;
    const title = document.createElement("strong");
    title.textContent = `${i + 1}. ${question.q}`;
    const yours = document.createElement("p");
    yours.className = "match-answer";
    yours.textContent = `Your answer: ${answerText(question, pick)}`;
    const best = document.createElement("p");
    best.className = "match-answer";
    best.textContent = `Best answer: ${bestText(question)}`;
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
  if (!isChoice(question) || number >= question.choices.length) return;
  choose(number);
});

draw();
