let d = new Date()
document.getElementById("currentyear").innerHTML = d.getFullYear()

/*let dayName = dayNames[d.getDay()]
let month = months[d.getMonth()]
let year = d.getFullYear()
let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

let fulldatetime = `${dayName}, ${month} ${d.getDate()}, ${year} ${time}`*/

document.getElementById("currentdatetime").innerHTML = `Last updated: ${new Date(document.lastModified)}`