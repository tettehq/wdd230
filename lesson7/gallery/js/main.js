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
      threshold: 0,
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