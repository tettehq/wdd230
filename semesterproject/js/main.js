// function to open and close menu in small view
function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("hide");
    document.querySelector('#openMenu').classList.toggle("hide")
    document.querySelector('#closeMenu').classList.toggle("hide")
}


let d = new Date();

/*let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('currentdate').textContent = d.toLocaleDateString(undefined, options);*/
//get current year
document.getElementById("currentyear").innerHTML = d.getFullYear()

/*if (date.getDay() == 6) {
    document.getElementById("announcement").textContent = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
};*/

/*function toggleEvents() {
    document.getElementById("events").classList.toggle("conceal");
}*/

document.getElementById("lastModified").innerHTML = `Last updated: ${new Date(document.lastModified)}`

//calling weather api for weather summary
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=5.6931&lon=0.0513&exclude=hourly&units=imperial&appid=adcf64205c6a3b7c707899e786bb29ed";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    weather(jsObject);
    getWindchill();
})

function weather(jsObject) {
    let currently = jsObject.current.weather[0].description;
    let temp = jsObject.current.temp;
    let humidity = jsObject.current.humidity;
    let windSpeed = jsObject.current.wind_speed;

    document.querySelector(".currently").textContent = currently;
    document.querySelector(".temp").textContent = temp;
    document.querySelector(".humidity").textContent = humidity;
    document.querySelector(".speed").textContent = windSpeed;
}

function getWindchill() {
    let temperature = document.querySelector(".temp").textContent;
    let windSpeed = document.querySelector(".speed").textContent;
    let windChill = document.querySelector(".windChill");
    
    
    if (parseInt(temperature) > 50 || parseInt(windSpeed) < 3) {
        windChill.textContent = "N/A"
    }

    else {
        let chill = Math.round(35.74 + (0.6215 * parseInt(temperature)) - (35.75 * parseInt(windSpeed)**0.16) + (0.4275 * parseInt(temperature) * parseInt(windSpeed)**0.16));
        windChill.textContent = `${chill}°F`;
    }
}

//calling our events json
/*const eventsListPath = "js/upcoming_events.json";

fetch(eventsListPath)
.then((response) => response.json())
.then((eventsObject) => {
    console.log(eventsObject);
})

function upcomingEvent() {
    let eventBox = document.querySelector("#eventBox");

    let d = new Date();

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}*/

//toggling events on or off
function toggleList() {
    document.querySelector("#eventBox").classList.toggle("hide");
    document.querySelector("#openEvents").classList.toggle("hide");
    document.querySelector("#closeEvents").classList.toggle("hide");
}

const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=5.6931&lon=0.0513&exclude=hourly&units=imperial&appid=adcf64205c6a3b7c707899e786bb29ed"

fetch(forecastURL)
.then((response) => response.json())
.then((forecastObject) => {
    console.log(forecastObject);
    createForecast(forecastObject)
});

function createForecast(forecastObject) {
    const list = forecastObject.daily;

    let threeDays = [];
    let d = new Date().getDay() - 1;
        for (let i = 0; i < list.length; i++) {
            if (i == d) {
                threeDays[0] = list[i]
                threeDays[1] = list[i+1]
                threeDays[2] = list[i+2]
            }
        }


    function toDate(dt) {
        const miliseconds = dt * 1000
        const dateObject = new Date(miliseconds)
        const weekDay = dateObject.toLocaleString("default", { weekday: "short" })
        return weekDay
    }

    document.querySelector("#day1").textContent = toDate(threeDays[0].dt);
    document.querySelector("#day2").textContent = toDate(threeDays[1].dt);
    document.querySelector("#day3").textContent = toDate(threeDays[2].dt);

    const imageLink = "https://openweathermap.org/img/w/";
    document.querySelector("#image1").setAttribute("src", `${imageLink}${threeDays[0].weather[0].icon}.png`);
    document.querySelector("#image2").setAttribute("src", `${imageLink}${threeDays[1].weather[0].icon}.png`);
    document.querySelector("#image3").setAttribute("src", `${imageLink}${threeDays[2].weather[0].icon}.png`);

    document.querySelector("#image1").setAttribute("alt", threeDays[0].weather[0].description);
    document.querySelector("#image2").setAttribute("alt", threeDays[1].weather[0].description);
    document.querySelector("#image3").setAttribute("alt", threeDays[2].weather[0].description);

    document.querySelector("#temp1").textContent = `${threeDays[0].temp.max}°F`;
    document.querySelector("#temp2").textContent = `${threeDays[1].temp.max}°F`;
    document.querySelector("#temp3").textContent = `${threeDays[2].temp.max}°F`;
    
    document.querySelector("#description1").textContent = `${threeDays[0].weather[0].description}`;
    document.querySelector("#description2").textContent = `${threeDays[1].weather[0].description}`;
    document.querySelector("#description3").textContent = `${threeDays[2].weather[0].description}`;
}

const companyPath = "js/businesses.json";

fetch(companyPath)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    fillAdverts(jsObject)
});

function fillAdverts(jsObject) {
    let adName1 = document.querySelector("#busName1");
    let adImage1 = document.querySelector("#adimage1");
    let adText1 = document.querySelector("#text1");

    adName1.textContent = jsObject.companies[1].name;
    adImage1.setAttribute("src", jsObject.companies[1].logo);
    adImage1.setAttribute("alt", "company logo")
    adText1.textContent = jsObject.companies[1].description;

    let adName2 = document.querySelector("#busName2");
    let adImage2 = document.querySelector("#adimage2");
    let adText2 = document.querySelector("#text2");

    adName2.textContent = jsObject.companies[2].name;
    adImage2.setAttribute("src", jsObject.companies[2].logo);
    adImage2.setAttribute("alt", "company logo")
    adText2.textContent = jsObject.companies[2].description;

    let adName3 = document.querySelector("#busName3");
    let adImage3 = document.querySelector("#adimage3");
    let adText3 = document.querySelector("#text3");

    adName3.textContent = jsObject.companies[3].name;
    adImage3.setAttribute("src", jsObject.companies[3].logo);
    adImage3.setAttribute("alt", "company logo")
    adText3.textContent = jsObject.companies[3].description;
}