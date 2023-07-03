function navBarOpen() {
  const burger = document.querySelector(".Header__burger");
  const menu = document.querySelector(".Menu");

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.add("Menu_open");
    burger.classList.add("Header__burger_hidden");
  });
}

navBarOpen();
