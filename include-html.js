class IncludeHtml extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <iframe src="${this.attributes.src.textContent}" loading="lazy" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()" />
        `
    }
}

customElements.define('include-html', IncludeHtml)
