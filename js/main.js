// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
var collpase = document.querySelector(".collapse")
var collpase2 = document.querySelector(".accordion-collapse1")
var collpase3 = document.querySelector(".accordion-collapse2")
var collpase4 = document.querySelector(".accordion-collapse3")
if (mediaQuery.matches) {
  collpase.removeAttribute("id")
  collpase2.removeAttribute("id")
  collpase3.removeAttribute("id")
  collpase4.removeAttribute("id")
  collpase.classList.add("show")
  collpase2.classList.add("show")
  collpase3.classList.add("show")
  collpase4.classList.add("show")
}