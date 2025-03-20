class SpecialSponsor extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <section class="special-sponsor">
            <span class="text text-container-left">
            Special Sponsor
            </span>
            <a href="https://www.monterail.com/services/vue-js-development?+utm_source=sponsorship&utm_medium=logo&utm_campaign=Vue">
               <img class="image-container" src="../../public/assets/icons/monterail.png" alt="Image">
            </a>
            <span class="text text-container-right">
            Official Vue & Nuxt Partner
            </span>
        </section>
        <section class="char-container">
            <div class="char-item">
                 <h3>Approachable</h3>
                <p class="char-p">Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
            </div>
            <div class="char-item">
                <h3>Performant</h3>
                <p class="char-p">Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
            </div>
            <div class="char-item">
                <h3>Versatile</h3>
                <p class="char-p">A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
            </div>
        </section>
        `
    }
}
customElements.define("special-sponsor", SpecialSponsor)