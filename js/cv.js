const createCard = (obj) => {
  const cvCard = document.createElement("div");
  const year = document.createElement("div");
  const deco = document.createElement("div");
  const dot = document.createElement("div");
  const verLine = document.createElement("div");
  const infoText = document.createElement("div");
  const heading = document.createElement("h4");
  const info = document.createElement("p");

  cvCard.classList.add("cv-card");
  year.classList.add("year");
  deco.classList.add("decoration");
  dot.classList.add("dot");
  verLine.classList.add("ver-line");
  infoText.classList.add("info-text");
  heading.classList.add("mb-xs");
  info.classList.add("mb-s");

  year.innerHTML = `<p>${obj.year}</p>`;
  heading.innerHTML = obj.heading;
  info.innerHTML = obj.description;

  cvCard.appendChild(year);
  cvCard.appendChild(deco);
  deco.appendChild(dot);
  deco.appendChild(verLine);
  cvCard.appendChild(infoText);
  infoText.appendChild(heading);
  infoText.appendChild(info);

    return cvCard;
};


fetch("../data/cv.json")
  .then((res) => res.json())
  .then((obj) => {

    const eduContainer = document.querySelector("#education");
    const expContainer = document.querySelector("#experience");

    for (let edu of obj.education) {
        const cvCard = createCard(edu);
      /* Lägg till element i htmlen */
      eduContainer.appendChild(cvCard);
    }

    for (let exp of obj.experience) {
        const cvCard = createCard(exp);

        expContainer.appendChild(cvCard);
    }


  });
