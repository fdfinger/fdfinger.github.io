customElements.define('z-card',
  class extends HTMLElement {
    constructor(){
      super();

      const style = document.createElement('style');
      style.textContent = `
        @import url("/static/css/bulma.min.css");
        * {
          margin-top: 10px;
        }
      `;

      const myElements = document.createElement('div')
      const template = `
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <slot name="header"></slot>
            </p>
          </header>
          <div class="card-content">
            <slot name="content"></slot>
          </div>
          <slot name="footer"></slot>
        </div>
      `
      myElements.innerHTML = template;
      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(myElements);
    }
  }
)