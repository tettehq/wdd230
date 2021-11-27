function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("hide");
}


let d = new Date();

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById('currentdate').textContent = d.toLocaleDateString(undefined, options);

// let toggleClass = (id) => {
//     document.getElementById(id).classList.toggle("active");
// }

// document.getElementById('link1').addEventListener('click', toggleClass('link1'));
// document.getElementById('link2').addEventListener('click', toggleClass('link2'));
// document.getElementById('link3').addEventListener('click', toggleClass('link3'));
// document.getElementById('link4').addEventListener('click', toggleClass('link4'));
// document.getElementById('link5').addEventListener('click', toggleClass('link5'));
// document.getElementById('link6').addEventListener('click', toggleClass('link6'));

let date = new Date()

if (date.getDay() == 6) {
    document.getElementById("announcement").textContent = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
};

function toggleEvents() {
    document.getElementById("events").classList.toggle("conceal");
}