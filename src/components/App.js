import Component from './Component.js';
import Header from './Header.js';
import CharacterList from './CharacterList.js';
import chractersApi from '../services/characters-api.js';
import Loading from './Loading.js';

class App extends Component {
    loadCharacters(characterList, loading) {
        const params = window.location.hash.slice(1);
        chractersApi.getCharacters(params)
            .then(characters => {
                characterList.update({ characters });
            })
            .finally(() => {
                loading.update({ loading: false });
            });
    }

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const characterList = new CharacterList({ characters: [] });
        main.appendChild(characterList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        this.loadCharacters(characterList, loading);

        window.addEventListener('hashchange', () => {
            this.loadCharacters(characterList, loading);
        });
            

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;