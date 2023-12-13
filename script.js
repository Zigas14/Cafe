const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
  navbarNav.classList.toggle('active');
}) 

document.addEventListener('click', function(e) {
   if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
   }
})

const searchForm = document.querySelector('.search-form');
const search = document.querySelector('#search');
const searchBox = document.querySelector("#search-box");
search.addEventListener('click', function (e) {
  searchForm.classList.toggle('actives');
  searchBox.focus()
  e.preventDefault()
})

document.addEventListener('click', function(e) {
  if(!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('actives');
  }
})

const shoppingCart = document.querySelector('.shopping-cart');
const cartButton = document.querySelector('#cart');

cartButton.addEventListener('click', function(e) {
 shoppingCart.classList.toggle("actives");
 e.preventDefault()
}) 

document.addEventListener('click', function(e) {
  if(!cartButton.contains(e.target) && !shoppingCart.contains(e.target) ){
    shoppingCart.classList.remove('actives');
  }
})