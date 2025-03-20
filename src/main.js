import './style.css'
import "../components/header/Header"
import "../components/main-section/HeroSection"
import "../components/main-section/SpecialSponsor"
import "../components/main-section/SponsorsSection"
import "../components/main-section/SiteMap"
import "../components/footer/Footer"

document.querySelector("#app").innerHTML = `
  <header-section></header-section>
  <hero-section></hero-section>
  <special-sponsor></special-sponsor>
  <sponsors-section></sponsors-section>
  <site-map></site-map>
  <footer-section></footer-section>
`