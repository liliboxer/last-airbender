import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;

        const enemyLink = new URLSearchParams();
        enemyLink.set('enemies', character.name);

        const alliesLink = new URLSearchParams();
        alliesLink.set('allies', character.name);

        if(!character.photoUrl) {
            character.photoUrl = 'https://vignette.wikia.nocookie.net/skies-of-arcadia/images/e/e4/Avatar_The_Last_Airbender_logo_%28alternate_version%29.png/revision/latest?cb=20180224144932';
        }

        return /*html*/ `
            <li class="character-item">
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}" alt="${character.name}">
                <div class="search">
                    <a href="#${enemyLink.toString()}">Enemies</a>
                    <a href="#${alliesLink.toString()}">Allies</a>
                </div>
            </li>
        `;
    }
}

export default CharacterItem;
