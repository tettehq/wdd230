function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("hide");
}


let d = new Date(Date.UTC(2021, 9, 9, 3, 0, 0));

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById('currentdate').textContent = d.toLocaleDateString(undefined, options);