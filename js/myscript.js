
let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let d = new Date()

let dayName = dayNames[d.getDay()]
let month = months[d.getMonth()]
let year = d.getFullYear()
let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

let fulldatetime = `${dayName}, ${month} ${d.getDate()}, ${year} ${time}`

document.getElementById("currentdatetime").innerHTML = `Last updated: ${fulldatetime}`

document.getElementById("info").innerHTML = `&copy; ${year} | Aaron Quarshie | Ghana | <a href="https://www.byui.edu/online" target="blank">BYUI Online Learning</a>`