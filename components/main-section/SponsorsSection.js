class Sponsors extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <section class="table-container">
        <h3>Platinum Sponsors</h3>
            <div class="table-1">
                <div class="table-cell"><a href="#">BIT</a></div>
                <div class="table-cell"><a href="#">Vue Mastery</a></div>
                <div class="table-cell"><a href="#">Vue school</a></div>
                <div class="table-cell"><a href="#">Vehikl</a></div>
                <div class="table-cell"><a href="#">Vuejs Amsterdam</a></div>
                <div class="table-cell"><a href="#">storyblok</a></div>
                <div class="table-cell"><a href="#">Chrome</a></div>
                <div class="table-cell"><a href="#">herodevs</a></div>
                <div class="table-cell"><a href="#">JavaScript</a></div>
                <div class="table-cell"><a href="#">Become a sponsor</a></div>
            </div>
            <h3>Gold Sponsors</h3>
            <div class="table-2">
                <div class="table-cell"><a href="#">BIT</a></div>
                <div class="table-cell"><a href="#">Vue Mastery</a></div>
                <div class="table-cell"><a href="#">Vue school</a></div>
                <div class="table-cell"><a href="#">Vehikl</a></div>
                <div class="table-cell"><a href="#">Vuejs Amsterdam</a></div>
                <div class="table-cell"><a href="#">storyblok</a></div>
                <div class="table-cell"><a href="#">Chrome</a></div>
                <div class="table-cell"><a href="#">herodevs</a></div>
                <div class="table-cell"><a href="#">JavaScript</a></div>
                <div class="table-cell"><a href="#">Become a sponsor</a></div>
                <div class="table-cell"><a href="#">Chrome</a></div>
                <div class="table-cell"><a href="#">herodevs</a></div>
                <div class="table-cell"><a href="#">JavaScript</a></div>
                <div class="table-cell"><a href="#">Become a sponsor</a></div>
                <div class="table-cell"><a href="#">Chrome</a></div>
                <div class="table-cell"><a href="#">herodevs</a></div>
                <div class="table-cell"><a href="#">JavaScript</a></div>
                <div class="table-cell"><a href="#">Become a sponsor</a></div>
            </div>
    </section>
    
        `
    }
}
customElements.define("sponsors-section", Sponsors)