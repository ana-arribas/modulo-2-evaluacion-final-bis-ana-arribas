'use strict';

const button = document.querySelector('#button');
const input4 = document.querySelector('#radio4');
const input6 = document.querySelector('#radio6');
const input8 = document.querySelector('#radio8');
const allinputs = document.querySelectorAll('.input');


const connectHandler = () => {
    for (let eachinput of allinputs)
        fetch(`https://beta.adalab.es/ejercicios-extra/api/pokemon-cards/${eachinput.value}.json`)
            .then(response => response.json())
            .then(data => displayShows(data))
};


const displayShows = patata => {
    console.log(patata);
}



button.addEventListener('click', connectHandler);