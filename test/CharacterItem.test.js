import CharacterItem from '../src/components/CharacterItem.js';

const test = QUnit.test;

QUnit.module('characters');

test('renderTemplate returns template', assert => {
    const character = {
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003',
        name: 'Aang'
    };
    
    const characterItem = new CharacterItem({ character });
    const rendered = characterItem.renderTemplate();

    assert.htmlEqual(rendered, /*html*/ `
        <li>
            <h2>Aang</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003" alt="Aang">
        </li>
    `);

});
