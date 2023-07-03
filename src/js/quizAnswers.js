const quizAnswersItems = document.querySelectorAll(".Quiz__answersItem");
const quizRadios = document.querySelectorAll('.Quiz__radio');

quizAnswersItems.forEach(answerItems => {
	answerItems.addEventListener("click", (event) => {

		disableAllQuizRadios();
		activateQuizRadio(event.currentTarget)
	})
});

function disableAllQuizRadios() {
	quizRadios.forEach(input => {
		input.checked = false;
	});

	quizAnswersItems.forEach(answer => {
		answer.classList.remove('Quiz__answersItem_active');
	})
}

function activateQuizRadio(currentTarget) {
	quizAnswersItems.forEach(answer => {
		if (answer == currentTarget) {
			answer.querySelector('.Quiz__radio').checked = true;
			answer.classList.add('Quiz__answersItem_active');
		}
	})
}