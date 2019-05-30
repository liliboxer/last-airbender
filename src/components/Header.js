import Component from './Component.js';
import Types from './Types.js';

class Header extends Component {
    render() { 
        const dom = this.renderDOM();
        const types = new Types();
        const typesDOM = types.renderDOM();
        dom.appendChild(typesDOM);

        return dom; 
    }

    renderTemplate() {
        return /*html*/ `
            <header>
                <h1>The Last Airbender</h1>
                <a href="">Show All Characters</a>
            </header>
        `;
    }
}

export default Header;
