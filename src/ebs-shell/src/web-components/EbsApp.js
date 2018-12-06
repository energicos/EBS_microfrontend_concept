class EbsApp extends HTMLElement {
  shadowRoot;

  constructor() {
    super();

    // TODO: make the url configurable
    const url = 'http://127.0.0.1:3001';
    this.renderApp(url);

    this.shadowRoot = this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.innerHTML = `
      Loading ${url}
    `;
  }

  async renderApp(url) {
    const response = await fetch(url);
    const content = await response.text();

    this.shadowRoot.innerHTML = content;
  }
}

customElements.define('ebs-app', EbsApp);
