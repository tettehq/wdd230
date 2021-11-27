const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=adcf64205c6a3b7c707899e786bb29ed";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    weather(jsObject);
    getWindchill();
})

function weather(jsObject) {
    let currently = jsObject.weather[0].description;
    let temp = jsObject.main.temp_max;
    let humidity = jsObject.main.humidity;
    let windSpeed = jsObject.wind.speed;

    document.querySelector(".currently").textContent = currently;
    document.querySelector(".temp").textContent = temp;
    document.querySelector(".humidity").textContent = humidity;
    document.querySelector(".speed").textContent = windSpeed;
}

function getWindchill() {
    let temperature = document.querySelector(".temp").textContent
    let windSpeed = document.querySelector(".speed").textContent

    
    
    if (parseInt(temperature) > 50 && parseInt(windSpeed) < 3) {
        return "N/A"
    }

    else {
        let chill = Math.round(35.74 + (0.6215 * parseInt(temperature)) - (35.75 * parseInt(windSpeed)**0.16) + (0.4275 * parseInt(temperature) * parseInt(windSpeed)**0.16))
        return `${chill}°F`
    }
}

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=adcf64205c6a3b7c707899e786bb29ed"

fetch(forecastURL)
.then((response) => response.json())
.then((forecastObject) => {
    console.log(forecastObject);


    const list = forecastObject.list

    let fiveDays = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].dt_txt.includes("18:00:00")) {
                fiveDays.push(list[i])
            }
        }


    function toDate(dt) {
        const miliseconds = dt * 1000
        const dateObject = new Date(miliseconds)
        const weekDay = dateObject.toLocaleString("default", { weekday: "short" })
        return weekDay
    }
    
    document.querySelector(".day1").textContent = toDate(fiveDays[0].dt);
    document.querySelector(".day2").textContent = toDate(fiveDays[1].dt);
    document.querySelector(".day3").textContent = toDate(fiveDays[2].dt);
    document.querySelector(".day4").textContent = toDate(fiveDays[3].dt);
    document.querySelector(".day5").textContent = toDate(fiveDays[4].dt);
    
    document.querySelector(".data1").textContent = `${fiveDays[0].main.temp}°F`;
    document.querySelector(".data2").textContent = `${fiveDays[1].main.temp}°F`;
    document.querySelector(".data3").textContent = `${fiveDays[2].main.temp}°F`;
    document.querySelector(".data4").textContent = `${fiveDays[3].main.temp}°F`;
    document.querySelector(".data5").textContent = `${fiveDays[4].main.temp}°F`;
    
    const imageLink = "https://openweathermap.org/img/w/";
    document.querySelector(".image1").setAttribute("src", `${imageLink}${fiveDays[0].weather[0].icon}.png`);
    document.querySelector(".image2").setAttribute("src", `${imageLink}${fiveDays[1].weather[0].icon}.png`);
    document.querySelector(".image3").setAttribute("src", `${imageLink}${fiveDays[2].weather[0].icon}.png`);
    document.querySelector(".image4").setAttribute("src", `${imageLink}${fiveDays[3].weather[0].icon}.png`);
    document.querySelector(".image5").setAttribute("src", `${imageLink}${fiveDays[4].weather[0].icon}.png`);
    
    document.querySelector(".image1").setAttribute("alt", fiveDays[0].weather[0].description);
    document.querySelector(".image2").setAttribute("alt", fiveDays[1].weather[0].description);
    document.querySelector(".image3").setAttribute("alt", fiveDays[2].weather[0].description);
    document.querySelector(".image4").setAttribute("alt", fiveDays[3].weather[0].description);
    document.querySelector(".image5").setAttribute("alt", fiveDays[4].weather[0].description);
});


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then((response) => response.json())
.then(function(jsonObject) {
    const towns = jsonObject["towns"];

    let eventSection = document.querySelector("#events");
    let eventList = document.createElement("ul");
    let event1 = document.createElement("li");
    let event2 = document.createElement("li");
    let event3 = document.createElement("li");

    event1.textContent = `${towns[2].events[0]}`;
    event2.textContent = `${towns[2].events[1]}`;
    event3.textContent = `${towns[2].events[2]}`;

    eventList.appendChild(event1);
    eventList.appendChild(event2);
    eventList.appendChild(event3);

    eventSection.appendChild(eventList);
})