hljs.initHighlightingOnLoad();


let burgerMenu = document.querySelector(".burger-menu");

let changes  = document.querySelectorAll('.change-vilibility')

function burgerClick() {
  if (burgerMenu.classList.contains("burger-menu-active")) {
    burgerMenu.classList.remove("burger-menu-active");
  }else{
    burgerMenu.classList.add("burger-menu-active")
  }
}
burgerClick();

changes.forEach((change) => change.addEventListener("click", burgerClick));



