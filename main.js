customElements.define('x-trend', class extends HTMLAnchorElement {
    constructor () {
        super()

        this.innerHTML = `
            <img width="50" height="50" class="circle" src="${this.dataset.img}"/>
            <span>
                <strong>@${this.dataset.name}</strong>
                <p>${this.dataset.desc}</p>
            </span>
        `
    }
}, { extends: 'a' })

customElements.define('x-announcement', class extends HTMLAnchorElement {
    constructor () {
        super()

        this.innerHTML = `
            <h3>${this.dataset.title}</h3>
            <p>${this.dataset.desc}</h3>
        `
    }
}, { extends: 'a' })

customElements.define('x-project', class extends HTMLElement {
    constructor () {
        super()

        const element = document.getElementById('ProjectCard').content.cloneNode(true)
        this.attachShadow({ mode: "open" }).appendChild(element)
    }
})