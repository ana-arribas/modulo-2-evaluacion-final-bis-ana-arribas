'use strict';

const button = document.querySelector('#button');
const input4 = document.querySelector('#radio4');
const input6 = document.querySelector('#radio6');
const input8 = document.querySelector('#radio8');
const wrapper = document.querySelector('.main-wrapper');
const allinputs = document.querySelectorAll('.input');
const list = document.querySelector('#list');

const connectHandler = () => {
    if (input4.checked) {
        fetch(`https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/${input4.value}.json`)
            .then(response => response.json())
            .then(data => displayShows(data))
    }
    else if (input6.checked) {
        fetch(`https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/${input6.value}.json`)
            .then(response => response.json())
            .then(data => displayShows(data))
    }
    else {
        fetch(`https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/${input8.value}.json`)
            .then(response => response.json())
            .then(data => displayShows(data))
    }
};

const displayShows = patata => {
    for (let card of patata) {
        const elementImg = document.createElement('img');
        const elementCard = document.createElement('div');
        const elementSpan = document.createElement('span');
        elementSpan.innerHTML = 'ADALAB';
        elementImg.src = card.image;
        elementCard.classList.add('card');
        list.classList.add('list');
        elementImg.classList.add('hidden');
        list.appendChild(elementCard);
        elementCard.appendChild(elementImg);
        elementCard.appendChild(elementSpan);
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

function storeGame() {
    if (input4.checked) {
        objectNumberGames.selected = input4.value;
    } else if (input6.checked) {
        objectNumberGames.selected = input6.value;
    } else {
        objectNumberGames.selected = input8.value;
    }
    localStorage.setItem('Details', JSON.stringify(objectNumberGames));
};

function checkLocalStorage() {
    if (localStorage.getItem('Details') !== null) {
        getGame();
    }
};

function getGame() {
    const storedGame = JSON.parse(localStorage.getItem('Details'));
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

button.addEventListener('click', connectHandler);
button.addEventListener('click', hidePreviousResults);
button.addEventListener('click', storeGame);
window.addEventListener('load', checkLocalStorage);
window.addEventListener('load', connectHandler);
