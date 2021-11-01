// f=35.74+0.6215t−35.75s0.16+0.4275ts0.16

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

document.querySelector(".windChill").textContent = getWindchill()