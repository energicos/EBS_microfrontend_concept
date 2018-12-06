class EbsApp extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({
      mode: 'open'
    });
    shadowRoot.innerHTML = `
      <style>
        h1 {
          color: green;
        }
      </style>
      <h1>Hey!</h1>
    `;
  }
}

customElements.define('ebs-app', EbsApp);
