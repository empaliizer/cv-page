fetch('../data/cv.json')
    .then(res => res.json())
    .then(obj => {
        /* 
            Fetch hämtar data från en url
            Första then gör om datan till json, filen kommer in som sträng
            Andra then händer när datan är konverterad till JSON som javascript kan arbeta med.
            Objektet från filen sparas i namnet "json", denna variabel kan man döpa till vad man vill. 

            <div class="cv-card">
                <div class="year">
                    <p>2022-2024</p>
                </div >
                <div class="decoration">
                    <div class="dot"></div>
                    <div class="ver-line"></div>
                </div>
                <div class="info-text">
                    <h4 class="mb-xs">Chas Academy</h4>
                    <p class="mb-s">Went two years in school to get a education in UX/UI with frontend knowledge.</p>
                </div>
            </div>


        */
        console.log(obj);

        const cardContainer = document.querySelector('#education');

        for(let edu of obj.education) {
            const cvCard = document.createElement('div');
            const year = document.createElement('div');
            const deco = document.createElement('div');
            const dot = document.createElement('div');
            const verLine = document.createElement('div');
            const infoText = document.createElement('div');

            cvCard.classList.add('cv-card');
            year.classList.add('year');
            deco.classList.add('decoration');
            dot.classList.add('dot');
            verLine.classList.add('ver-line');
            infoText.classList.add('info-text');

            year.innerHTML = `<p>${edu.year}</p>`;

            cvCard.appendChild(year);
            cvCard.appendChild(deco);
            deco.appendChild(dot);
            deco.appendChild(verLine);
            cvCard.appendChild(infoText);

            /* Lägg till element i htmlen */
            cardContainer.appendChild(cvCard);
        }
        
    });