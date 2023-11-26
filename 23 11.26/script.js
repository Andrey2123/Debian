const num = Math.floor(Math.random()*9)+1;
const imgParent = document.querySelector('body');
const img = document.createElement('img');
img.src = `images/${num}.jpg`;
imgParent.appendChild(img);