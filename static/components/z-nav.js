customElements.define('z-nav',
  class extends HTMLElement {
    constructor(){
      super();

      const style = document.createElement('style');
      style.textContent = `
        @import url("/static/css/bulma.min.css");
      `;

      const myElements = document.createElement('nav')
      myElements.className = "navbar";
      myElements.setAttribute('role', 'navigation');
      const template = `
        <div class="navbar-brand">
          <a href="http://fdfinger.github.io/" class="navbar-item"><strong>JiangFei</strong><span style="color: #00d1b2"> 江飞</span>.io</a>
          <button class="button navbar-burger" data-target="navbar_menu">
            <span><a href="/" class="navbar-item">主页</a></span>
            <span><a href="/blog" class="navbar-item">博客</a></span>
          </button>
          </div>
        <div class="navbar-menu" id="navbar_menu">
          <div class="navbar-start">
            <a href="/" class="navbar-item">
              主页
            </a>
            <a href="/blog" class="navbar-item">
              博客
            </a>
          </div>
          <div class="navbar-end">
            <a href="http://github.com/fdfinger" target="_blank" class="navbar-item is-black">
              <i class="fab fa-github"></i> Github
            </a>
            <a href="https://weibo.com/keaiyucheng" target="_blank"  class="navbar-item is-blue">
              <i class="fab fa-weibo"></i> Weibo <i class="fas fa-user"></i>
              <span class="icon">
                <i class="fas fa-home"></i>
              </span>
            </a>
          </div>
        </div>
      `
      myElements.innerHTML = template;
      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(myElements);
    }
  }
)