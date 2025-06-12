import './index.css'

/* Hamburger Menu sliding in function for mobile view */
const hamburgerBtn = document.getElementById("hamburger-btn")
const mobileNavbar = document.getElementById("mobile-navbar")
let isMenuOpen = false

hamburgerBtn?.addEventListener("click", () => {
  if (!mobileNavbar) return

  isMenuOpen = !isMenuOpen
  mobileNavbar.classList.toggle("translate-x-0", isMenuOpen)
  mobileNavbar.classList.toggle("translate-x-full", !isMenuOpen)
})