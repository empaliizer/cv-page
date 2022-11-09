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

const skillCard = (obj) => {
  const container = document.createElement("div");
  const title = document.createElement("p")
  const dark = document.createElement("div");
  const light = document.createElement("div");
  const procent = document.createElement("p");

  container.classList.add("skill-container");
  title.classList.add("skill-title");
  dark.classList.add("skill-dark");
  light.classList.add("skill-light");
  light.style.width = obj.procent;

  title.innerHTML = obj.skill; 
  procent.innerHTML = obj.procent;

  container.appendChild(title);
  dark.appendChild(light);
  container.appendChild(dark);
  container.appendChild(procent);

  return container;
}


fetch("../data/cv.json")
  .then((res) => res.json())
  .then((obj) => {

    const eduContainer = document.querySelector("#education");
    const expContainer = document.querySelector("#experience");
    const skillContianer = document.querySelector("#cv-skills");

    for (let edu of obj.education) {
        const cvCard = createCard(edu);
        eduContainer.appendChild(cvCard);
    }

    for (let exp of obj.experience) {
        const cvCard = createCard(exp);
        expContainer.appendChild(cvCard);
    }

    for(let skill of obj.skills){
    const skillSection = skillCard(skill);
    skillContianer.appendChild(skillSection);
  }
  });
