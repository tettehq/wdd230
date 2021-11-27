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


let lastVisit
const daysToMilliseconds = 8640000;

if ("lastVisit" in localStorage) {
    lastVisit = localStorage.getItem("lastVisit");
}
else {
    lastVisit = Date.now();
}

let timeDifference = Math.round((Date.now() - lastVisit)/daysToMilliseconds);
localStorage.lastVisit = Date.now();

console.log(timeDifference)

document.querySelector(".timeDifference").textContent = timeDifference;