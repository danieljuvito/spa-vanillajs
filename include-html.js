class IncludeHtml extends HTMLIFrameElement {
    constructor() {
        super()
        this.attributes.setNamedItem('loading') = 'lazy'
    }
    
    connectedCallback() {
    }
}

customElements.define('include-html', IncludeHtml, { 'extends': 'iframe' })

