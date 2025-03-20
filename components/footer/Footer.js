class Footer extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <p>Released under the <a href="https://opensource.org/license/MIT">MIT License</a>.</p>
                <p>Copyright © 2014-2025 Evan You</p>
            </div>
        </footer>
        `
    }
}
customElements.define("footer-section", Footer)