const menulist = document.querySelector("#menu");
const handleMenuClick = e => {
  const { target } = e;
  const childs = menulist.children;
  if (target.classList.contains("home")) {
    childs[1].classList.remove("cur");
    childs[2].classList.remove("cur");
  } else if (target.classList.contains("about")) {
    childs[0].classList.remove("cur");
    childs[2].classList.remove("cur");
  } else if (target.classList.contains("contact")) {
    childs[0].classList.remove("cur");
    childs[1].classList.remove("cur");
  }
  target.classList.add("cur");
};
const init = () => {
  menulist.addEventListener("click", handleMenuClick);
};
if (menulist) {
  init();
}
