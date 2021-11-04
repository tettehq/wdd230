let d = new Date(2021, 10, 04);

let options = {year: 'numeric', month: 'numeric', day: 'numeric' };

document.querySelector("span").textContent = d.toLocaleDateString(undefined, options);