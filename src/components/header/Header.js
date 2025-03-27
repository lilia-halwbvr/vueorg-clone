class Header extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <header>
            <div class="header">
                <div class="header-left">
                    <div class="header-logo">
                        <img src="./public/assets/icons/logo-vue.svg" alt="logo">
                        <span>Vue.js</span>
                    </div>
                    <button class="search-button">
                        <img src="./public/assets/icons/header-search.svg" alt="search">
                        <span class="search-text">Search</span>
                        <div class="search-btn-shortcut">⌘ K</div>
                    </button>
                </div>
                <button class="menu-toggle-button"><img src="./public/assets/icons/menu-btn.svg" alt="menu"></button>
                <div class="navigation">
                    <nav>
                        <ul class="nav-menu">
                            <li>
                                <a href="#">Docs</a>
                                <img class="nav-icon" src="./public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Playground</a></li>
                            <li>
                                <a href="#">Ecosystem</a>
                                <img class="nav-icon" src="./public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                            <li><a href="#">About</a></li>
                            <li>
                                <a href="#">Sponsor</a>
                            </li>
                            <li>
                                <a href="#">Experts</a>
                                <div class="new-p">NEW</div>
                                <img class="nav-icon" src="./public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            </li>
                        </ul>
                    </nav>
                    
                    <button class="header-translation-btn">
                        <img src="./public/assets/icons/header-translate.svg" alt="translate">
                    </button>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <div class="buttons">
                        <button class="header-btns"> <img src="./public/assets/icons/header-github.svg" alt="github"></button>
                        <button class="header-btns"> <img src="./public/assets/icons/header-twitter.svg" alt="twitter"></button>
                        <button class="header-btns"> <img src="./public/assets/icons/header-discord.svg" alt="discord"></button>
                    </div>
                    <button class="menu-dots-btn"><img class="dots-bnt-img" src="./public/assets/icons/header-menu-dots.svg"> </button>
                </div>
            </div>
      </header>
      
        `
        document.addEventListener("DOMContentLoaded", () => {
            const themeToggle = document.querySelector(".switch input");
            if (localStorage.getItem("theme") === "dark" || (window.matchMedia("(prefers-color-scheme: dark)").matches)) { //return mediaQueryList
                document.documentElement.classList.add("dark-theme")
                themeToggle.checked = true
            } else {
                themeToggle.checked = false
            }

            themeToggle.addEventListener("change", () => {
                if (themeToggle.checked) {
                    document.documentElement.classList.add("dark-theme")
                } else {
                    document.documentElement.classList.remove("dark-theme")
                }
            })
        })

    }
}
customElements.define("header-section", Header)