import "./style.css";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a"
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  }
];

let currentQuiz = 0;
let score = 0;

const quiz = document.querySelector(".quiz-container");
const question = document.querySelector(".question");
const answerEls = document.querySelectorAll(".answer");
const aText = document.querySelector(".a_text");
const bText = document.querySelector(".b_text");
const cText = document.querySelector(".c_text");
const dText = document.querySelector(".d_text");
const btnSubmit = document.querySelector(".btn-answer");

loadQuiz();

function loadQuiz() {
  deselecteAnswer();
  let currentQuizData = quizData[currentQuiz];
  console.log(currentQuizData);

  question.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function deselecteAnswer() {
  answerEls.forEach(el => (el.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

btnSubmit.addEventListener("click", () => {
  let answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <div class="question">${score}/${quizData.length}</div>
        <button class="location.reload()">Reload</button>
      `;
    }
  }
});
