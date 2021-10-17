function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("hide");
}


let d = new Date(Date.UTC(2021, 9, 9, 3, 0, 0));

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById('currentdate').textContent = d.toLocaleDateString(undefined, options);

function toggleLink() {
    document.getElementById('link').classList.toggle("active");
}

/*document.getElementById('link1').addEventListener('click', toggleLink)
document.getElementById('link2').addEventListener('click', toggleLink)
document.getElementById('link3').addEventListener('click', toggleLink)
document.getElementById('link4').addEventListener('click', toggleLink)
document.getElementById('link5').addEventListener('click', toggleLink)
document.getElementById('link6').addEventListener('click', toggleLink)
*/
let date = new Date()

if (date.getDay() == 6) {
    document.getElementById("announcement").textContent = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
};