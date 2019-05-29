import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        const loading = this.props.loading;
        if(!loading) {
            return `<div></div>`;
        }

        return /*html*/ `
            <div class="loading">
                <img src="https://i.gifer.com/origin/b3/b34dc1592ae8556da933835c0d532738_w200.gif" alt="loading...">
            </div>
        `;
    }
}

export default Loading;
