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
        elementImg.src = card.image;
        const elementCard = document.createElement('div');
        elementCard.classList.add('card');
        list.appendChild(elementCard);
        elementCard.appendChild(elementImg);
        elementImg.classList.add('hidden');
    }
}

button.addEventListener('click', connectHandler);