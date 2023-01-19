const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "616199d000msh3bacd729db7065bp112f92jsnaa522a896bec",
    "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
  },
};

fetch("https://gogoanime2.p.rapidapi.com/popular", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));



// Swiper Js

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
