const links = document.querySelectorAll('a');
const wrapper = document.querySelector('.wrapper');

for(let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add('hide');
        setTimeout(() => {
            window.location.href = link.getAttribute('href');
        }, 300);
    })
}