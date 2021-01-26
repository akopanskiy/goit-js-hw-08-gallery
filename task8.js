import gallery from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const backdrop = document.querySelector('.lightbox');
const backdropImage = document.querySelector('.lightbox__image');
const button = document.querySelector('button');
// console.log(button);
galleryRef.addEventListener('click', openModal);
button.addEventListener('click', closeModal);

const addGallery = gallery.map(image => {
  const listElement = document.createElement('li');
  listElement.classList.add('gallery__item');

  const reference = document.createElement('a');
  reference.classList.add('gallery__link');
  reference.href = image.original;
  listElement.appendChild(reference);

  const imageItem = document.createElement('img');
  imageItem.classList.add('gallery__image');
  imageItem.src = image.preview;
  imageItem.setAttribute('data-source', `${image.original}`);
  imageItem.alt = image.description;
  reference.appendChild(imageItem);

  return listElement;
});
galleryRef.append(...addGallery);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.log(event.target.dataset.source);

  backdrop.classList.add('is-open');
  backdropImage.src = event.target.dataset.source;
  backdropImage.alt = event.target.alt;
}

function closeModal(event) {
  event.preventDefault();
  backdrop.classList.remove('is-open');
  backdropImage.src = '';
}
