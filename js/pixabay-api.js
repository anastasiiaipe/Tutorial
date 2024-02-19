"use strict";

export function fetchImages(userSymbol) {
  const BASE_URL = "https://pixabay.com";
  const END_POINT = "/api";
  const KEY_API = "/?key=42408826-646f1c33dda85bc33c99aac2a";
  const PARAMS = `&q=${userSymbol}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + KEY_API + PARAMS;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      throw new Error(err.status);
    });
}

// export function fetchImages(userSymbol) {
//   const KEY_API = '42408826-646f1c33dda85bc33c99aac2a';

//   const params = {
//     key: KEY_API,
//     q: userSymbol,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   };

//   const queryString = new URLSearchParams(params).toString();
//   const BASE_URL = `https://pixabay.com/api/?${queryString}`;

//   return fetch(BASE_URL, {
//     method: 'GET',
//     mode: 'cors',
//   }).then(res => res.json());
// }
