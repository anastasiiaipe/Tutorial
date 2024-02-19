"use strict";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "./js/pixabay-api";
import { photoTemplate } from "./js/render-function";
import { galleryEl } from "./js/render-function";

const refs = {
  formEL: document.querySelector(".img-search-form"),
  loaderEl: document.querySelector(".loader-container"),
};

refs.formEL.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  galleryEl.innerHTML = "";
  refs.loaderEl.classList.remove("hidden");
  const userSymbol = e.target.elements.query.value.trim();
  fetchImages(userSymbol).then((data) => {
    refs.loaderEl.classList.add("hidden");
    if (data.totalHits === 0) {
      iziToast.show({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        backgroundColor: "red",
        position: "topRight",
      });
    } else if (userSymbol === "") {
      refs.loaderEl.classList.add("hidden");
      iziToast.show({
        message: "Fill out the search form!",
        backgroundColor: "red",
        position: "topRight",
      });
    } else {
      refs.loaderEl.classList.add("hidden");
      photoTemplate(data);
    }
  });
  e.target.reset();
}

// refs.loaderEl.style.display = 'none';

// refs.formEL.addEventListener('submit', e => {
//   e.preventDefault();
//   refs.galleryEl.innerHTML = '';
//   const userSubmit = e.target.elements.query.value.trim();
//   refs.loaderEl.style.display = 'block';
//   fetchImages(userSubmit)
//     .then(data => {
//       if (!data.hits.length) {
//         iziToast.show({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           backgroundColor: 'red',
//           position: 'topRight',
//         });
//         refs.galleryEl.innerHTML = '';
//       } else {
//         photoTemplate(data);
//       }
//     })
//     .finally(() => {
//       refs.loaderEl.style.display = 'none';
//     });
//   e.target.reset();
// });
