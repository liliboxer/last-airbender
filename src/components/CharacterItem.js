import Component from './Component.js';

class CharacterItem extends Component {
    renderTemplate() {
        const character = this.props.character;

        if(!character.photoUrl) {
            character.photoUrl = 'https://vignette.wikia.nocookie.net/skies-of-arcadia/images/e/e4/Avatar_The_Last_Airbender_logo_%28alternate_version%29.png/revision/latest?cb=20180224144932';
        }

        return /*html*/ `
            <li>
                <h2>${character.name}</h2>
                <img src="${character.photoUrl}" alt="${character.name}">
            </li>
        `;
    }
}

export default CharacterItem;
