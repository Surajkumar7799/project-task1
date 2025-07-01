const quizData = [
  {
    question: "what dose SQL stant for?",
    choices: ["structure quary language", "student quary language", "structure quantity language", "none of this"],
    answer: "structure quary language"
  },
  {
    question: "what is the value of a[5] as the result of tje following array declartion",
    choices: ["5", "6", "4", "0"],
    answer: "6"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheets", "Computer Style Sheet", "Colorful Style Sheet", "Creative Style Sheet"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    choices: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script"
  }
   ,{
    question: " which of the following are primary type",
    choices: ["string", "integer", "flot", "all of this"],
    answer: "string"
  }, {
    question: "what is the value of 111%13",
    choices: ["3", "5", "7", "9"],
    answer: "7"
  }
  , {
    question: "THIS WEBSIT RATING BY SURAJ",
    choices: ["10", "9", "8", "1"],
    answer: "10"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  feedbackEl.textContent = "";
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  choicesEl.innerHTML = "";

  current.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.classList.add("choice-btn");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(btn, current.answer);
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const buttons = document.querySelectorAll(".choice-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `Wrong! Correct answer is: ${correctAnswer}`;
    feedbackEl.style.color = "red";
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hide");
  resultEl.classList.remove("hide");
  scoreEl.textContent = `${score} out of ${quizData.length}`;
}

loadQuestion();
