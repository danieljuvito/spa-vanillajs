export default class IncludeLayout extends HTMLElement {
    constructor() {
        super()

        const template = document.createElement('template');
        template.innerHTML = `<iframe/>`;

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.iframe = this.shadowRoot.querySelector('iframe')
    }

    connectedCallback() {
        const { iframe } = this

        iframe.setAttribute('src', this.attributes.src.textContent)
        iframe.setAttribute('loading', 'lazy')
        iframe.addEventListener('load', () => {
            iframe.before((iframe.contentDocument).children[0]);
            iframe.remove()
        })
    }
}
