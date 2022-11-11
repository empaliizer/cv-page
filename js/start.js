const titleElem = document.querySelector('.top-title');
const title = titleElem.innerHTML;
const titleLength = title.length;

document.querySelector('.top-title').innerHTML = '';

let animationSpeed = 500;

for(let i = 0; i < titleLength; i++) {
    setTimeout(() => {
        const span = document.createElement('span');
        span.innerHTML = title[i];
        titleElem.appendChild(span);
    }, animationSpeed);
    animationSpeed += 100;
}