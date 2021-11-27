const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject["towns"];

    let prestonData = document.querySelector(".preston .town-data");
    let prestonName = document.createElement("h2");
    let prestonMotto = document.createElement("h3");
    let prestonYear = document.createElement("p");
    let prestonPopulation = document.createElement("p");
    let prestonRainfall = document.createElement("p");
    let prestonImage = document.createElement("img");
    let prestonImageBox = document.querySelector(".preston figure");

    prestonName.textContent = `${towns[6].name}`;
    prestonMotto.textContent = `${towns[6].motto}`;
    prestonYear.textContent = `Year founded: ${towns[6].yearFounded}`;
    prestonPopulation.textContent = `Population: ${towns[6].currentPopulation}`;
    prestonRainfall.textContent = `Annual rainfall: ${towns[6].averageRainfall}`;
    prestonImage.setAttribute("src", `images/${towns[6].photo}`);
    prestonImage.setAttribute("alt", `${towns[6].name}`);

    prestonData.appendChild(prestonName);
    prestonData.appendChild(prestonMotto);
    prestonData.appendChild(prestonYear);
    prestonData.appendChild(prestonPopulation);
    prestonData.appendChild(prestonRainfall);

    prestonImageBox.appendChild(prestonImage);

    
    let sodaSpringsData = document.querySelector(".soda-springs .town-data");
    let sodaSpringsName = document.createElement("h2");
    let sodaSpringsMotto = document.createElement("h3");
    let sodaSpringsYear = document.createElement("p");
    let sodaSpringsPopulation = document.createElement("p");
    let sodaSpringsRainfall = document.createElement("p");
    let sodaSpringsImage = document.createElement("img");
    let sodaSpringsImageBox = document.querySelector(".soda-springs figure");

    sodaSpringsName.textContent = `${towns[0].name}`;
    sodaSpringsMotto.textContent = `${towns[0].motto}`;
    sodaSpringsYear.textContent = `Year founded: ${towns[0].yearFounded}`;
    sodaSpringsPopulation.textContent = `Population: ${towns[0].currentPopulation}`;
    sodaSpringsRainfall.textContent = `Annual rainfall: ${towns[0].averageRainfall}`;
    sodaSpringsImage.setAttribute("src", `images/${towns[0].photo}`);
    sodaSpringsImage.setAttribute("alt", `${towns[0].name}`);

    sodaSpringsData.appendChild(sodaSpringsName);
    sodaSpringsData.appendChild(sodaSpringsMotto);
    sodaSpringsData.appendChild(sodaSpringsYear);
    sodaSpringsData.appendChild(sodaSpringsPopulation);
    sodaSpringsData.appendChild(sodaSpringsRainfall);

    sodaSpringsImageBox.appendChild(sodaSpringsImage);


    let fishHavenData = document.querySelector(".fish-haven .town-data");
    let fishHavenName = document.createElement("h2");
    let fishHavenMotto = document.createElement("h3");
    let fishHavenYear = document.createElement("p");
    let fishHavenPopulation = document.createElement("p");
    let fishHavenRainfall = document.createElement("p");
    let fishHavenImage = document.createElement("img");
    let fishHavenImageBox = document.querySelector(".fish-haven figure");

    fishHavenName.textContent = `${towns[2].name}`;
    fishHavenMotto.textContent = `${towns[2].motto}`;
    fishHavenYear.textContent = `Year founded: ${towns[2].yearFounded}`;
    fishHavenPopulation.textContent = `Population: ${towns[2].currentPopulation}`;
    fishHavenRainfall.textContent = `Annual rainfall: ${towns[2].averageRainfall}`;
    fishHavenImage.setAttribute("src", `images/${towns[2].photo}`);
    fishHavenImage.setAttribute("alt", `${towns[2].name}`);

    fishHavenData.appendChild(fishHavenName);
    fishHavenData.appendChild(fishHavenMotto);
    fishHavenData.appendChild(fishHavenYear);
    fishHavenData.appendChild(fishHavenPopulation);
    fishHavenData.appendChild(fishHavenRainfall);

    fishHavenImageBox.appendChild(fishHavenImage);


  });