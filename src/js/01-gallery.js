import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(image =>
    `<li class="gallery__item">
  <a class="gallery__link"
  href="${image.original}">
  <img class="gallery__image"
  src="${image.preview}"
  alt="${image.description}" />
  </a>

</li>`)
  .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);


let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})





