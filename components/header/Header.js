class Header extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <header>
        <div class="header">
            <div class="header-left">
                <div class="header-logo">
                    <img src="../../public/assets/icons/logo-vue.svg" alt="logo">
                    <span>Vue.js</span>
                </div>
                <button class="search-button">
                    <img class="search-button-pic" src="../../public/assets/icons/header-search.svg" alt="search">
                    <span class="search-text">Search</span>
                    <div class="search-btn-shirtcut">⌘ K</div>
                </button>
            </div>
            <button class="menu-toggle-button"><img src="../../public/assets/icons/menu-btn.svg" alt="menu"></button>
            <div class="navigation">
                <nav>
                    <ul class="nav-menu">
                        <li class="dropdown">
                            <a href="#">Docs</a>
                            <img class="nav-icon" src="../../public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            <ul class="dropdown-menu">
                                <li><a href="#">Guide</a></li>
                                <li><a href="#">Tutorial</a></li>
                                <li><a href="#">Examples</a></li>
                                <li><a href="#">Quick start</a></li>
                                <li><a href="#">Glossary</a></li>
                                <li><a href="#">Error reference</a></li>
                                <li><a href="#">Vue 2 docs</a></li>
                                <li><a href="#">Migration from Vue 2</a></li>
                            </ul>
                        </li>
    
                        <li><a href="#">API</a></li>
                        <li><a href="#">Playground</a></li>
                        <li class="dropdown">
                            <a href="#">Ecosystem</a>
                            <img class="nav-icon" src="../../public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            <ul class="dropdown-menu">
                            <div class="menu-items">
                                    <li>RESOURCES</li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">Developers</a></li>
                                    <li><a href="#">Themes</a></li>
                                    <li><a href="#">UI components</a></li>
                                    <li><a href="#">Certification</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">T-Shirt shop</a></li>
                                </div>
                                <div class="menu-items">
                                    <li>OFFICIAL LIBRARIES</li>
                                    <li><a href="#">Vue Router</a></li>
                                    <li><a href="#">Pinia</a></li>
                                    <li><a href="#">Tooling Guide</a></li>
                                </div>
                                <div class="menu-items">
                                    <li>VIDEO COURSES</li>
                                    <li><a href="#">Vue Mastery</a></li>
                                    <li><a href="#">Vue School</a></li>
                                </div>
                                <div class="menu-items">
                                    <li>HELP</li>
                                    <li><a href="#">Discord chat</a></li>
                                    <li><a href="#">GitHub discussions</a></li>
                                    <li><a href="#">DEV community</a></li>
                                </div>
                                <div class="menu-items">
                                    <li>NEWS</li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Newsletters</a></li>
                                </div>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#">About</a>
                            <img class="nav-icon" src="../../public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            <ul class="dropdown-menu">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Releases</a></li>
                                <li><a href="#">Community guide</a></li>
                                <li><a href="#">Code of conduct</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">The documentary</a></li>
                            </ul>
                        </li>
    
                        <li>
                            <a href="#">Sponsor</a>
                        </li>
                        <li class="dropdown">
                            <a href="#">Experts</a>
                            <div class="new-p">NEW</div>
                            <img class="nav-icon" src="../../public/assets/icons/header-nav-arrow.svg" alt="Arrow">
                            <ul class="dropdown-menu">
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Developers</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                
                <div class="dropdown">
                    <button class="header-translation-btn">
                        <img src="../../public/assets/icons/header-translate.svg" alt="translate">
                    </button>
                
                    <ul class="dropdown-menu">
                        <li>
                            <a href="#">Italiano</a>
                            <img src="../../public/assets/icons/header-github.svg" alt="github">
                        </li>
                        <li>
                        <a href="#">English</a>
                        <img src="../../public/assets/icons/header-github.svg" alt="github">
                    </li>
                        <li>Help us translate!</li>
                    </ul>
                </div>

                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>
                <div class="buttons">
                    <button class="header-btns"> <img src="../../public/assets/icons/header-github.svg" alt="github"></button>
                    <button class="header-btns"> <img src="../../public/assets/icons/header-twitter.svg" alt="twitter"></button>
                    <button class="header-btns"> <img src="../../public/assets/icons/header-discord.svg" alt="discord"></button>
                </div>
                

                <div class="dropdown">
                    <button class="menu-dots-btn">
                        <img class="dots-btn-img" src="../../public/assets/icons/header-menu-dots.svg" alt="menu">
                    </button>

                    <ul class="dropdown-menu menu-dots-dropdown">
                        <li><a href="#">Appearance</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    
        `
        document.addEventListener('DOMContentLoaded', function () {
            const menuButton = document.querySelector('.menu-dots-btn');
            const dropdownMenu = document.querySelector('.menu-dots-dropdown');
            const slider = document.querySelector('.switch')
            const icons = document.querySelector('.buttons')
            const navigationMenu = document.querySelector('.navigation')

            const moveElementsToDropdown = () => {
                if (window.innerWidth <= 1278) {
                    if (!dropdownMenu.contains(slider)) {
                        dropdownMenu.appendChild(slider);
                    }
                    if (!dropdownMenu.contains(icons)) {
                        dropdownMenu.appendChild(icons);
                    }
                    slider.style.display = 'block';
                    icons.style.display = 'block';
                }
            }
            // почему то не работает. то есть когда уменьшаешь экран автоматически кнопки в намальное состояние не вернутся (на ширину больше 1278)
            window.addEventListener('resize', moveElementsToDropdown);
            moveElementsToDropdown()

            //show & hide dropdown menu
            menuButton.addEventListener('click', function () {
                dropdownMenu.classList.toggle('open');
            });

            document.addEventListener('click', function (event) {
                if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                    dropdownMenu.classList.remove('open');
                }
            });
        });

    }



}
customElements.define("header-section", Header)