(() => {
  const menulist = document.querySelector("#menu"),
    cityList = document.querySelector(".city_list");
  const handleMenuClick = (e) => {
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
  const handleScroll = (e) => {
    const pageOffY = window.pageYOffset;
    const bg = document.querySelectorAll(".bg img");
    const se = bg[0],
      to = bg[1],
      be = bg[2];
    console.log(pageOffY, cityList.getBoundingClientRect().y);
    if (pageOffY < 135) {
      cityList.classList.remove("fixed");
    } else {
      if (!cityList.classList.contains("fixed")) {
        cityList.classList.add("fixed");
      }
    }
    if (se.getBoundingClientRect().top <= 700) {
      if (!se.classList.contains("show-up")) se.classList.add("show-bg");
    } else {
      se.classList.remove("show-bg");
    }
    if (to.getBoundingClientRect().top <= 700) {
      if (!to.classList.contains("show-up")) to.classList.add("show-bg");
    } else {
      to.classList.remove("show-bg");
    }
    if (be.getBoundingClientRect().top <= 700) {
      if (!be.classList.contains("show-up")) be.classList.add("show-bg");
    } else {
      be.classList.remove("show-bg");
    }
  };
  const init = () => {
    menulist.addEventListener("click", handleMenuClick);
    window.addEventListener("scroll", handleScroll);
  };
  if (menulist) {
    init();
  }
})();
