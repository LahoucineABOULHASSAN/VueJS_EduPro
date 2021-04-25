export const isActive = (event) => {
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach((elem) => {
    if (elem === event.target) {
      event.target.classList.add('isActive')
    } else elem.classList.remove('isActive')
  })
  const dropdownItems = document.querySelectorAll('.dropdown-item')
  dropdownItems.forEach((elem) => {
    if (elem === event.target) {
      event.target.classList.add('isActive')
    } else elem.classList.remove('isActive')
  })
}
