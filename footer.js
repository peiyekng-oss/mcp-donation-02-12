class SiteFooter extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--dark-color);
                    color: var(--white-color);
                    padding: 2rem;
                    text-align: center;
                    font-family: var(--font-secondary);
                }
            </style>
            <footer>
                <p>&copy; 2024 WeCare. All rights reserved.</p>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
