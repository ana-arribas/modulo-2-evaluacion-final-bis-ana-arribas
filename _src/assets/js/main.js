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
    else if (input8.checked) {
        fetch(`https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/${input8.value}.json`)
            .then(response => response.json())
            .then(data => displayShows(data))
    }
    else {
        const alert = document.createElement('p');
        alert.innerHTML = 'Por favor, selecciona una opción'
        wrapper.appendChild(alert);
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

let objectNumberGames = {
    selected: ''
};

function storeGame() {
    if (input4.checked) {
        objectNumberGames.selected = input4.value;
    } else if (input6.checked) {
        objectNumberGames.selected = input6.value;
    } else if (input8.checked) {
        objectNumberGames.selected = input8.value;
    }
    storeData();
}

function storeData() {
    localStorage.setItem('Details', JSON.stringify(objectNumberGames));
};

button.addEventListener('click', connectHandler);
input4.addEventListener('click', storeGame);
input6.addEventListener('click', storeGame);
input8.addEventListener('click', storeGame);