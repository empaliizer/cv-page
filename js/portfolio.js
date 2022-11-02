let startItem = 0;
let endItem = 3;
const loadMoreBtn = document.querySelector('#loadmore');
fetch("https://api.github.com/users/empaliizer/repos")
    .then((res) => res.json())
    .then((objs) => {

        fetch("../data/portfolio.json")
            .then((res) => res.json())
            .then((cont) => {
                loopItems(objs, cont);
                loadMoreBtn.addEventListener('click', () => {
                    startItem = startItem + 3;
                    endItem = endItem + 3;
                    loopItems(objs, cont);
                })
        });
    });

const loopItems = (objs, cont) => {
    for(let i = startItem; i < endItem; i++) {
        objs[i].img = cont[objs[i].name]?.img || "/img/coming-soon-1.jpeg";
        objs[i].heading = cont[objs[i].name]?.name || objs[i].name; 
        console.log(objs[i])
        portCard(objs[i]);
    }
}

const portCard = (obj) => {
    console.log(obj.img)
    const col3 = document.querySelector('#col-3');

    const card = document.createElement("div");
    const cardInner = document.createElement("div");
    const img = document.createElement("div");
    const bgColor = document.createElement("div");
    const cardMain = document.createElement("div");
    const btnContainer = document.createElement("div");
    const info = document.createElement("p");
    const btn = document.createElement("a");
    const btnLink = document.createElement("div");
    const heading = document.createElement('div');
    const h2 = document.createElement('h2');
  
    card.classList.add("card");
    cardInner.classList.add("card-inner");
    img.classList.add("portfolio-img");
    bgColor.classList.add("bg-color");
    cardMain.classList.add("card-main");
    btnContainer.classList.add("col-3", "btn-container", "mb-s", "mt-s");
    info.classList.add("text-info");
    btn.classList.add("btn");
    btnLink.classList.add("btn-link")
    heading.classList.add("heading", "mt-s", "mb-s");
  
    img.setAttribute('style',`background-image: url('${obj.img}`);
    info.innerHTML = obj.description;
    btn.setAttribute('href', obj.html_url);
    btnLink.innerHTML = `Link to github`;
    h2.innerHTML = obj.heading;

    btn.appendChild(btnLink)
    btnContainer.appendChild(btn)
    cardMain.appendChild(info);
    cardMain.appendChild(btnContainer);
    bgColor.appendChild(cardMain);
    cardInner.appendChild(img);
    cardInner.appendChild(bgColor);
    card.appendChild(cardInner);
    heading.appendChild(h2);
    card.appendChild(heading);
    col3.appendChild(card);
  
      return card;
  };
  