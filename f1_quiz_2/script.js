const data = [
  {
    question: "In what year did Mercedes win their first constructors' championship?",
    a: "2012",
    b: "2013",
    c: "2014",
    d: "2015",
    correct: "c",
  },
  {
    question: "Where did Charles Leclerc get his first F1 win?",
    a: "Monza, Italy",
    b: "Sakhir, Bahrain",
    c: "Spa Francorchamps, Belgium",
    d: "Red Bull Ring, Austria",
    correct: "c",
  },
  {
    question: "Who was leading the drivers' championship before the summer break in 2018?",
    a: "Lewis Hamilton",
    b: "Sebastian Vettel",
    c: "Max Verstappen",
    d: "Kimi Raikkonen",
    correct: "b",
  },
  {
    question: "Where did Sebastian Vettel famously crash in 2018 and end his title challenge?",
    a: "Hockenheim, Germany",
    b: "Spa Francorchamps, Belgium",
    c: "Suzuka, Japan",
    d: "Sochi, Russia",
    correct: "a",
  },
  {
    question: "In what year did Max Verstappen replace Daniil Kvyat at Red Bull midseason?",
    a: "2014",
    b: "2015",
    c: "2016",
    d: "2017",
    correct: "c",
  },
  {
    question: "Who was Daniel Ricciardo driving for in F1 before joining Red Bull?",
    a: "HRT",
    b: "Toro Rosso (now Alpha Tauri)",
    c: "Minardi",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Who replaced Nico Hülkenberg at Renault in 2020?",
    a: "Daniel Ricciardo",
    b: "Esteban Ocon",
    c: "Fernando Alonso",
    d: "Jolyon Palmer",
    correct: "b",
  },
  {
    question: "Where did George Russell replace Lewis Hamilton in 2020?",
    a: "Sakhir, Bahrain",
    b: "Yas Marina, Abu Dhabi",
    c: "Marina Circuit, Singapore",
    d: "Sakhir (outer circuit), Bahrain",
    correct: "d",
  },
  {
    question: "In what year did Nico Rosberg beat Lewis Hamilton for the drivers' champioship?",
    a: "2014",
    b: "2015",
    c: "2016",
    d: "2017",
    correct: "c",
  },
  {
    question: "What team is the most successful in F1?",
    a: "McLaren",
    b: "Mercedes",
    c: "Ferrari",
    d: "Renault",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("answer_a");
const b_text = document.getElementById("answer_b");
const c_text = document.getElementById("answer_c");
const d_text = document.getElementById("answer_d");
const submit = document.getElementById("submit");
const back = document.getElementById("back");

let current = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentData = data[current];

  question.innerText = currentData.question;
  a_text.innerText = currentData.a;
  b_text.innerText = currentData.b;
  c_text.innerText = currentData.c;
  d_text.innerText = currentData.d;
}

function getSelected() {
  let answer = undefined;

  answers.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answers.forEach((ans) => {
    ans.checked = false;
  });
}

submit.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === data[current].correct) {
      score++;
    }
    current++;
    if (current < data.length) {
      loadQuiz();
    } else {
      if (score == data.length) {
        quiz.innerHTML = `
          <h2>You got ${score}/${data.length}.</h2>
          <div id='good'>Good Job!</div>
          <button onclick="location.reload()">Reload</button>
        `;
      } else {
        quiz.innerHTML = `
          <h2>You got ${score}/${data.length}.</h2>
          <button id='corr' onclick="location.href = 'correctAnswers.html'">
            View Correct Answers
          </button>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  }
});