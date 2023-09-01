import { galleryItems } from './gallery-items.js';
// Change code below this line


// Створення і рендер розмітки на підставі масиву даних galleryItems і 
// наданого шаблону елемента галереї.

// ================== start Step -1  - эта часть делается по шаблону 3-го задания из 6 домашки 

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(image => `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt = "${image.description}"
    />
  </a >
</li > `)
  .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

// console.log(galleryItems);

//  ===================== end Step - 1


//Реалізація делегування на ul.gallery і отримання url великого зображення.

//  ===================== start Step - 2 модуль 7 урок 30.08 2:10:55

galleryEl.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const { target: galleryImgEl } = event;
  const bannerUrl = galleryImgEl.dataset.source;
  const instance = basicLightbox.create(`<img src="${bannerUrl}">`);
  instance.show();
  console.log(bannerUrl);
});
//  ===================== end Step - 2 модуль 7 урок 30.08 2:26:00


