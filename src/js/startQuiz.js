const btnStartQuiz = document.querySelector('.CallToAction__btnStartQuiz');
const quizBlock = document.querySelector('.MainBlock__quiz');
const callToActionBlock = document.querySelector('.MainBlock__callToAction')


btnStartQuiz.addEventListener('click', (e) => {
	e.preventDefault();
	quizBlock.classList.add("MainBlock__quiz_open");
	callToActionBlock.classList.add("MainBlock__callToAction_hidden");
})