fetch("https://api.github.com/users/empaliizer/repos")
    .then((res) => res.json())
    .then((objs) => {

        fetch("../data/portfolio.json")
            .then((res) => res.json())
            .then((imgs) => {

                for(let i = 0; i < 3; i++) {
                    objs[i].img = imgs[objs[i].name] || "/img/hangman.png";
                    console.log(objs[i])
                    portCard(objs[i]);

                }
        });
        


      
  
    //   for (let desc of obj.description) {
    //       const cvCard = createCard(edu);
    //     /* Lägg till element i htmlen */
    //     eduContainer.appendChild(cvCard);
    //   }
  
    //   for (let exp of obj.experience) {
    //       const cvCard = createCard(exp);
  
    //       expContainer.appendChild(cvCard);
    //   }
  
  
    });

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
    btnContainer.classList.add("btn-container", "mb-s", "mt-s");
    info.classList.add("text-info");
    btn.classList.add("btn");
    btnLink.classList.add("btn-link")
    heading.classList.add("heading");
  
    img.setAttribute('style',`background-image: url('${obj.img}`);
    info.innerHTML = obj.description;
    btn.innerHTML = obj.html_url;
    btnLink.innerHTML = `Link to github`;
    h2.innerHTML = obj.heading;

    cardMain.appendChild(info);
    cardMain.appendChild(
        btnContainer.appendChild(
            btn.appendChild(
                btnLink
            )
        )
    );
    
    bgColor.appendChild(cardMain);
    cardInner.appendChild(img);
    cardInner.appendChild(bgColor);
    cardInner.appendChild(cardMain);
    card.appendChild(cardInner);
    col3.appendChild(card);
  
      return card;
  };
  