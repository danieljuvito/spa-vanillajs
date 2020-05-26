window.customElements.define('counter-', class extends HTMLElement {
    #count = 0;

    connectedCallback() {
        const elemCount = document.createTextNode(this.#count);

        const elemP = document.createElement('p');
        elemP.append('Counter: ');
        elemP.append(elemCount);

        const elemButton = document.createElement('button');
        elemButton.innerHTML = '+';
        elemButton.addEventListener('click', () => {
            elemCount.textContent = this.#count += 1;
        });

        this.appendChild(elemP);
        this.appendChild(elemButton);
    }
});
