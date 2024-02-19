"use strict";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const galleryEl = document.querySelector(".gallery");

export function photoTemplate(data) {
  const markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}">
            <div class="image-info">
              <p><b>Likes: </b>${likes}</p>
              <p><b>Views: </b>${views}</p>
              <p><b>Comments: </b>${comments}</p>
              <p><b>Downloads: </b>${downloads}</p>
            </div>
          </a>
        </li>`;
      }
    )
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", markup);

  const lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: "bottom",
  });
  lightbox.refresh();
}

// export function photoTemplate(data) {
//   const options = {
//     captions: true,
//     captionSelector: 'img',
//     captionType: 'attr',
//     captionsData: 'alt',
//     captionPosition: 'bottom',
//     animation: 250,
//     widthRatio: 0.9,
//     scaleImageToRatio: true,
//   };
//   const markup = data.hits
//     .map(data => {
//       return `<li class="gallery-item">
//       <a href="${data.webformatURL} class="gallery-link"">
//           <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}">
//       </a>
//           <div class="image-info">
//           <p><b>Likes: </b>${data.likes}</p>
//           <p><b>Views: </b>${data.views}</p>
//           <p><b>Comments: </b>${data.comments}</p>
//           <p><b>Downloads: </b>${data.downloads}</p>
//           </div>
//           </li>`;
//     })
//     .join('');
//   refs.listEL.insertAdjacentHTML('afterbegin', markup);
//   const lightbox = new SimpleLightbox('.gallery a', options);
//   lightbox.refresh();
//   refs.formEL.reset();
// }
