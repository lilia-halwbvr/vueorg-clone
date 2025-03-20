class SiteMap extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <nav class="map">
            <div class="map-links">
                <div class="category">
                    <h4>Docs</h4>
                    <ul>
                        <li><a href="#">Guide</a></li>
                        <li><a href="#">Tutorial</a></li>
                        <li><a href="#">Examples</a></li>
                        <li><a href="#">Quick Start</a></li>
                        <li><a href="#">Glossary</a></li>
                        <li><a href="#">Error Reference</a></li>
                        <li><a href="#">Vue 2 Docs</a></li>
                        <li><a href="#">Migration from Vue 2</a></li>
                    </ul>
                </div>
                <div class="category">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Releases</a></li>
                        <li><a href="#">Community Guide</a></li>
                        <li><a href="#">Code of Conduct</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">The Documentary</a></li>
                    </ul>
                </div>
                <div class="category">
                    <h4>Experts</h4>
                    <ul>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Developers</a></li>
                    </ul>
                </div>
                <div class="category">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Themes</a></li>
                        <li><a href="#">UI Components</a></li>
                        <li><a href="#">Certification</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">T-Shirt Shop</a></li>
                    </ul>
                </div>
                <div class="category">
                    <h4>Official Libraries</h4>
                    <ul>
                        <li><a href="#">Vue Router</a></li>
                        <li><a href="#">Pinia</a></li>
                        <li><a href="#">Tooling Guide</a></li>
                    </ul>
                </div>
                <div class="category">
                    <h4>Video Courses</h4>
                    <ul>
                        <li><a href="#">Vue Mastery</a></li>
                        <li><a href="#">Vue School</a></li>
                    </ul>
                </div>
                <div class="category">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#">Discord Chat</a></li>
                        <li><a href="#">GitHub Discussions</a></li>
                        <li><a href="#">DEV Community</a></li>
                    </ul>
                </div>
                <div class="category">
                    <h4>News</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Newsletters</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        `
    }
}
customElements.define("site-map", SiteMap)