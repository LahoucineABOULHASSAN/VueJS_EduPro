export const isActive = (event) => {
  const navLinks = document.querySelectorAll(".nav-link");
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  navLinks.forEach((elem) => {
    if (elem === event.target) {
      event.target.classList.add("isActive");
      scrollTo(event.target.dataset.id);
    } else elem.classList.remove("isActive");
  });
  dropdownItems.forEach((elem) => {
    if (elem === event.target) {
      event.target.classList.add("isActive");
      scrollTo(event.target.dataset.id);
    } else elem.classList.remove("isActive");
  });
};
export const scrollTo = (elem) => {
  const sticky = document.querySelector("#" + elem).offsetTop;
  document.body.scrollTop = sticky - 30; // For Safari
  document.documentElement.scrollTop = sticky - 30;
};
