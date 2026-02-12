class SiteHeader extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--white-color);
                    box-shadow: var(--shadow);
                    padding: 1rem 2rem;
                }
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                a {
                    text-decoration: none;
                }
                .logo-link {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .logo-image {
                    height: 50px;
                    width: auto;
                }
                ul {
                    list-style: none;
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
                ul a {
                    font-family: var(--font-primary);
                    font-weight: 600;
                    color: var(--dark-color);
                    transition: color 0.3s ease;
                }
                ul a:hover {
                    color: var(--primary-color);
                }
                .btn-register {
                    background-color: var(--accent-color);
                    color: var(--white-color);
                    padding: 0.6rem 1.2rem;
                    border-radius: 5px;
                    border: 2px solid var(--accent-color);
                }
                .btn-register:hover {
                    background-color: transparent;
                    color: var(--accent-color);
                }
            </style>
            <header>
                <nav>
                    <a href="index.html" class="logo-link">
                        <img alt="WeCare Logo" class="logo-image">
                    </a>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="donor_dashboard.html">Donor Dashboard</a></li>
                        <li><a href="ngo_dashboard.html">NGO Dashboard</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html" class="btn btn-register">Register</a></li>
                    </ul>
                </nav>
            </header>
        `;
        const image = shadow.querySelector('.logo-image');
        image.src = 'brand-logo.png';
    }
}

export default SiteHeader;