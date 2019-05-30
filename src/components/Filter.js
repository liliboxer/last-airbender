import Component from './Component.js';

class Filter extends Component {
    render() {
        const form = this.renderDOM();
        const button = form.querySelectorAll('button');
        
        form.addEventListener('submit', event => {
            event.preventDefault();
            const typeLink = new URLSearchParams();
            typeLink.set('nation', button.value);
            console.log(button.value);
            
        });
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <section>
                <form>
                    <button value="fire">Fire</button>
                    <button value="air">Air</button>
                    <button value="water">Water</button>
                    <button value="earth">Earth</button>
                </form>
            </section>
        `;

    }
}

export default Filter;