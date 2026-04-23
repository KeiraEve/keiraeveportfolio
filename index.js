class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="resume.html">Resume</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="artwork.html">Artwork</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('navigation-component', Navigation);


class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Keira Chapman</h1>
            </header>
        `;
    }
}

customElements.define('header-component', Header);

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>
                    Made by Keira Chapman<br>
                    &copy; 2026
                </p>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);