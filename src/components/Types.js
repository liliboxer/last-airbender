import Component from './Component.js';

class Types extends Component {
    render() {
        const form = this.renderDOM();
        form.addEventListener('submit', event => {
            event.preventDefault();
            console.log('hi');
        });
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <section>
                <form>
                    <button>Fire</button>
                    <button>Air</button>
                    <button>Water</button>
                    <button>Earth</button>
                </form>
            </section>
        `;

    }
}

export default Types;