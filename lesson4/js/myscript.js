function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("hide");
}


let d = new Date();

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById('currentdate').textContent = d.toLocaleDateString(undefined, options);