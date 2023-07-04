let quizCounter = 1;
const totalQuestion = 5;

const btnNextQuestion = document.querySelector(".Quiz__buttonNextQuestion");
const viewQuestionNumber = document.querySelector(".Quiz__question_number");
const progressItems = document.querySelectorAll(".Quiz__ProgressItem");
const quizQuestions = document.querySelectorAll(".Quiz__question");
const buttonSend = document.querySelector(".Quiz__buttonSend");

btnNextQuestion.addEventListener("click", (e) => {
  e.preventDefault();
  quizCounter++;

  // Изменили номер текущего вопроса
  viewQuestionNumber.innerHTML = quizCounter;

  // Изменили прогрессбар
  progressItems.forEach((item, index) => {
    if (index < quizCounter) {
      item.classList.add("Quiz__ProgressItem_fill");
    }
  });

  quizQuestions.forEach((question, index) => {
    if (index + 1 == quizCounter) {
      question.classList.remove("Quiz__question_hidden");
    } else {
      question.classList.add("Quiz__question_hidden");
    }
  });

  if (quizCounter == totalQuestion) {
    buttonSend.classList.remove("Quiz__button_hidden");
    btnNextQuestion.classList.add("Quiz__button_hidden");
  }
});
