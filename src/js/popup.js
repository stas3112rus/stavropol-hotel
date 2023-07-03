function popup() {
	const actionsPopupOpen = document.querySelectorAll('.Popup_open');
	const popup = document.querySelector('.Popup');
	const closePopup = document.querySelector('.Popup__close');

	actionsPopupOpen.forEach(popUpOpen => {
		popUpOpen.addEventListener("click", (e) => {
			e.preventDefault();
			popup.classList.add('Popup_active');
		})
	});

	closePopup.addEventListener('click', (e) => {
		e.preventDefault();
		popup.classList.remove('Popup_active');
	})

	popup.addEventListener("click", (e) => {
		e.preventDefault();
		if (e.target == popup) {
			popup.classList.remove('Popup_active');
		}
	})
}

popup();