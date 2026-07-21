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

                <ul>
                    <li><a onclick="contactMe()" id="contacttext">Contact</a></li>
                </ul>
            </nav>

            <div id="bg-cover" class="background-cover"></div>

            <div id="popup" class="popup">
                <div id="contact" class="popuptext">
                    <p onclick="contactMe()" id="popupX">X</p>
                    <p style="font-size: 0.7em">Find me...</p>
                    <p>On <a href="https://github.com/KeiraEve">GitHub</a></p>
                    <p>keiraevechapman@gmail.com</p>
                    <p>518-268-7122</p>
                    <p onclick="contactMe()" id="popupclose">Close</p>
                </div>
            </div>
        `;
    }
}

function contactMe() {
    var popup = document.getElementById("contact");
    var bg = document.getElementById("bg-cover");
    var contact = document.getElementById("contacttext");
    popup.classList.toggle("show");
    if (bg.style.display == "block") {
        bg.style.display = "none";
        contact.style.zIndex = 0;
    } else { 
        bg.style.display = "block";
        contact.style.zIndex = 10;
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

const contact = document.getElementById("contact");
