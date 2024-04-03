const hex = document.querySelector('.hexCode');
const btn = document.querySelector('.generate');
const body = document.querySelector('body');

const randomColor = Math.random().toString(16);
console.log(randomColor);

const generateHexColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    console.log(randomColor);
    body.style.backgroundColor = `#${randomColor}`;
    hex.innerHTML = `#${randomColor}`;
}

btn.addEventListener('click', generateHexColor);
body.addEventListener('mousewheel', generateHexColor);