customElements.define('z-section',
  class extends HTMLElement {
    constructor(){
      super();

      const style = document.createElement('style');
      style.textContent = `
        @import url("/static/css/bulma.min.css");
      `;

      const myElements = document.createElement('section')
      myElements.className = 'section';

      const template = `
        <div class="container">
          <h1 class="title">${this.getAttribute('title')}</h1>
          <h2 class="subtitle">
            ${this.getAttribute('content')}
          </h2>
          <p><a href="${this.getAttribute('url')}" class="button is-link" target="_blank">去瞅瞅</a></p>
        </div>
      `
      myElements.innerHTML = template;

      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(myElements);
    }
  }
)