// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItemsList = createGalleryList(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemsList);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="Image description" />
</a>`;
    })
    .join('');
}
