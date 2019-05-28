import Component from './Component.js';

class CharacterList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul class="character-list">
            <li>
                <h2>Ang</h2>
                <img src="https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003" alt="Aang">
            </li>
            <li>
                <h2>Azula</h2>
                <img src="https://vignette.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest?cb=20140905084941" alt="Azula">
            </li>
            <li>
                <h2>Zuko</h2>
                <img src="https://vignette.wikia.nocookie.net/avatar/images/0/00/Zuko_games.png/revision/latest?cb=20131228014207" alt="Zuko">
            </li>
            </ul>
        `;
    }
}

export default CharacterList;