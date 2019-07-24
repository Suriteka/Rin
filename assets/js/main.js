document.addEventListener('DOMContentLoaded', () => {
  let menu = document.querySelector('.menu')
  let menuCategories = document.querySelector('.menu__title')

  menuCategories.addEventListener('click', () => {
    menu.classList.toggle('open')
  })
})
