import Component from './Component.js';

class Types extends Component {
    renderTemplate() {
        return /*html*/`
            <form>
                <button>Fire</button>
                <button>Air</button>
                <button>Water</button>
                <button>Earth</button>
            </form>
        `;

    }
}

export default Types;