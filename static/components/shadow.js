customElements.define('open-shadow', 
  class extends HTMLElement {
    constructor () {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(pElem);
    }
  }
)

customElements.define('close-shadow', 
  class extends HTMLElement {
    constructor () {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.appendChild(pElem);
    }
  }
)