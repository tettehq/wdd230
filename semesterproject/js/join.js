// function to open and close menu in small view
function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("hide");
    document.querySelector('#openMenu').classList.toggle("hide")
    document.querySelector('#closeMenu').classList.toggle("hide")
}

let d = new Date();

document.getElementById("currentyear").innerHTML = d.getFullYear()

document.getElementById("lastModified").innerHTML = `Last updated: ${new Date(document.lastModified)}`