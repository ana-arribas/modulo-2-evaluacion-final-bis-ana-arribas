'use strict';

const button = document.querySelector('#button');
const input4 = document.querySelector('#radio4');
const input6 = document.querySelector('#radio6');
const input8 = document.querySelector('#radio8');
const list = document.querySelector('#list');

const connectHandler = () => {
    if (input4.checked) {
        fetch(`https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/${input4.value}.json`)
            .then(response => response.json())
            .then(data => mixCards(data))
    }
    else if (input6.checked) {
        fetch(`https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/${input6.value}.json`)
            .then(response => response.json())
            .then(data => mixCards(data))
    }
    else {
        fetch(`https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/${input8.value}.json`)
            .then(response => response.json())
            .then(data => mixCards(data))
    }
};

const mixCards = myArray => {
    const result = myArray.sort(function () {
        return 0.5 - Math.random();
    });
    displayShows(result);
};

const displayShows = arrayMixed => {
    for (let card of arrayMixed) {
        console.log(card);
        const elementImg = document.createElement('img');
        const elementCard = document.createElement('div');
        const elementSpan = document.createElement('span');

        elementCard.setAttribute('pair', card.pair);
        elementSpan.innerHTML = 'ADALAB';
        elementImg.src = card.image;
        elementImg.classList.add('select-img');
        elementSpan.classList.add('select-span');
        elementCard.classList.add('select-card');
        elementCard.classList.add('card');
        list.classList.add('list');
        elementImg.classList.add('hidden');
        list.appendChild(elementCard);
        elementCard.appendChild(elementImg);
        elementCard.appendChild(elementSpan);
        elementCard.addEventListener('click', turnCards);
    }
};

const hidePreviousResults = () => {
    if (list.innerHTML !== null) {
        list.innerHTML = '';
    }
};

let objectNumberGames = {
    selected: ''
};

const storeGame = () => {
    if (input4.checked) {
        objectNumberGames.selected = input4.value;
    } else if (input6.checked) {
        objectNumberGames.selected = input6.value;
    } else {
        objectNumberGames.selected = input8.value;
    }
    localStorage.setItem('Storing', JSON.stringify(objectNumberGames));
};

const check = () => {
    if (localStorage.getItem('Storing') !== null) {
        getGame();
    }
};

const getGame = () => {
    const storedGame = JSON.parse(localStorage.getItem('Storing'));
    if (storedGame !== undefined) {
        if (storedGame.selected === input4.value) {
            input4.checked = true;
            input6.checked = false;
            input8.checked = false
        }
        else if (storedGame.selected === input6.value) {
            input6.checked = true;
            input8.checked = false;
            input4.checked = false
        }
        else {
            input6.checked = false;
            input4.checked = false;
            input8.checked = true;
        }
    }
};

const turnCards = event => {
    const totalTurned = document.querySelectorAll('.card-reverse:not(.match)');
    if (totalTurned.length > 1) {
        return;
    }
    event.currentTarget.classList.add('card-reverse');
    event.currentTarget.firstChild.classList.remove('hidden');
    event.currentTarget.lastChild.classList.add('hidden');
    const eachTurned = document.querySelectorAll('.card-reverse:not(.match)');
    if (eachTurned.length < 2) {
        return;
    }
    if (eachTurned[0].attributes[0].value !== eachTurned[1].attributes[0].value) {
        setTimeout(function () { errorMatch(eachTurned); }, 1000);
    } else {
        correctMatch(eachTurned);
    }
};

const errorMatch = arrayOfTurned => {
    for (let each of arrayOfTurned) {
        each.classList.remove('card-reverse');
        each.firstChild.classList.add('hidden');
        each.lastChild.classList.remove('hidden');
    }
    console.log('error');
};

const correctMatch = arrayOfTurned => {
    for (let each of arrayOfTurned) {
        each.classList.add('match');
    }
    console.log('acierto');
};

button.addEventListener('click', connectHandler);
button.addEventListener('click', hidePreviousResults);
button.addEventListener('click', storeGame);
window.addEventListener('load', check);
window.addEventListener('load', connectHandler);