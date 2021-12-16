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