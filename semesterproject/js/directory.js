let imageList = document.querySelectorAll(".gallery img[data-src");

const displayImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
};
  
  /*imagesToLoad.forEach((img) => {
      displayImages(img);
  });*/
const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 75px 0px"
};
  
  
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                displayImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);
    imageList.forEach((img) => {
        observer.observe(img);
    });
}
else {
    imageList.forEach((img) => {
        displayImages(img);
});
}

// function to open and close menu in small view
function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("hide");
    document.querySelector('#openMenu').classList.toggle("hide")
    document.querySelector('#closeMenu').classList.toggle("hide")
}

const companyPath = "js/businesses.json";

fetch(companyPath)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    fillDirectory(jsObject);
});

function fillDirectory(jsObject) {
    let bus1Name = document.querySelector(".busCard1 h2");
    let bus1Img = document.querySelector(".busCard1 img");
    let bus1Txt = document.querySelector(".busCard1 p");
    let bus1Link = document.querySelector(".busCard1 a");

    bus1Name.textContent = jsObject.companies[0].name;
    bus1Img.setAttribute("src", jsObject.companies[0].logo);
    bus1Txt.textContent = jsObject.companies[0].description;
    bus1Link.setAttribute("href", jsObject.companies[0].website);
    bus1Link.textContent = jsObject.companies[0].website;

    let bus2Name = document.querySelector(".busCard2 h2");
    let bus2Img = document.querySelector(".busCard2 img");
    let bus2Txt = document.querySelector(".busCard2 p");
    let bus2Link = document.querySelector(".busCard2 a");

    bus2Name.textContent = jsObject.companies[1].name;
    bus2Img.setAttribute("src", jsObject.companies[1].logo);
    bus2Txt.textContent = jsObject.companies[1].description;
    bus2Link.setAttribute("href", jsObject.companies[1].website);
    bus2Link.textContent = jsObject.companies[1].website;

    let bus3Name = document.querySelector(".busCard3 h2");
    let bus3Img = document.querySelector(".busCard3 img");
    let bus3Txt = document.querySelector(".busCard3 p");
    let bus3Link = document.querySelector(".busCard3 a");

    bus3Name.textContent = jsObject.companies[2].name;
    bus3Img.setAttribute("src", jsObject.companies[2].logo);
    bus3Txt.textContent = jsObject.companies[2].description;
    bus3Link.setAttribute("href", jsObject.companies[2].website);
    bus3Link.textContent = jsObject.companies[2].website;

    let bus4Name = document.querySelector(".busCard4 h2");
    let bus4Img = document.querySelector(".busCard4 img");
    let bus4Txt = document.querySelector(".busCard4 p");
    let bus4Link = document.querySelector(".busCard4 a");

    bus4Name.textContent = jsObject.companies[3].name;
    bus4Img.setAttribute("src", jsObject.companies[3].logo);
    bus4Txt.textContent = jsObject.companies[3].description;
    bus4Link.setAttribute("href", jsObject.companies[3].website);
    bus4Link.textContent = jsObject.companies[3].website;

    let bus5Name = document.querySelector(".busCard5 h2");
    let bus5Img = document.querySelector(".busCard5 img");
    let bus5Txt = document.querySelector(".busCard5 p");
    let bus5Link = document.querySelector(".busCard5 a");

    bus5Name.textContent = jsObject.companies[4].name;
    bus5Img.setAttribute("src", jsObject.companies[4].logo);
    bus5Txt.textContent = jsObject.companies[4].description;
    bus5Link.setAttribute("href", jsObject.companies[4].website);
    bus5Link.textContent = jsObject.companies[4].website;

    let bus6Name = document.querySelector(".busCard6 h2");
    let bus6Img = document.querySelector(".busCard6 img");
    let bus6Txt = document.querySelector(".busCard6 p");
    let bus6Link = document.querySelector(".busCard6 a");

    bus6Name.textContent = jsObject.companies[5].name;
    bus6Img.setAttribute("src", jsObject.companies[5].logo);
    bus6Txt.textContent = jsObject.companies[5].description;
    bus6Link.setAttribute("href", jsObject.companies[5].website);
    bus6Link.textContent = jsObject.companies[5].website;

    let bus7Name = document.querySelector(".busCard7 h2");
    let bus7Img = document.querySelector(".busCard7 img");
    let bus7Txt = document.querySelector(".busCard7 p");
    let bus7Link = document.querySelector(".busCard7 a");

    bus7Name.textContent = jsObject.companies[6].name;
    bus7Img.setAttribute("src", jsObject.companies[6].logo);
    bus7Txt.textContent = jsObject.companies[6].description;
    bus7Link.setAttribute("href", jsObject.companies[6].website);
    bus7Link.textContent = jsObject.companies[6].website;
}

function toggleMenu() {
    document.getElementById('primary-nav').classList.toggle("hide");
    document.querySelector('#openMenu').classList.toggle("hide")
    document.querySelector('#closeMenu').classList.toggle("hide")
}

function toggleView() {
    document.querySelector("#directory").classList.toggle("cardGrid");
    document.querySelector("#directory").classList.toggle("cardList");
    document.querySelector("#list").classList.toggle("hide");
    document.querySelector("#grid").classList.toggle("hide");
}

let d = new Date();

document.getElementById("currentyear").innerHTML = d.getFullYear()

document.getElementById("lastModified").innerHTML = `Last updated: ${new Date(document.lastModified)}`