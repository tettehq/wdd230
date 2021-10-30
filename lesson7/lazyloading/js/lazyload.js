let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

/*imagesToLoad.forEach((img) => {
    loadImages(img);
});*/
const options = {
    threshold: 0,
    rootMargin: "0px 0px 75px 0px"
};


if ("IntersectionObserver" in window) {
    console.log("true")
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, options);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}
else {
    console.log("none")
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}