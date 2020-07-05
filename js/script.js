'use strict';
const newColor = document.getElementById('newColor'),
    body = document.querySelector('body'),
    textColor = document.querySelector('.textColor');
const randomColor = () => {
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
};
const addColor = () => {
    event.preventDefault();
    body.style.background = randomColor();
    textColor.textContent = randomColor();
};

newColor.addEventListener('click', addColor);
