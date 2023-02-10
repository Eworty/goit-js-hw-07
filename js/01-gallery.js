import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = createGalleryList(galleryItems);

galleryEl.addEventListener('click', onImageClick);

function createGalleryList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onImageClick(e) {
  if (e.target.nodeName !== `IMG`) {
    return;
  }

  e.preventDefault();

  const onCloseModale = e => {
    const ESC_KEY = 'Escape';

    if (e.code === ESC_KEY) {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onCloseModale);
      },

      onClose: instance => {
        window.addEventListener('keydown', onCloseModale);
      },
    }
  );
  instance.show();
}
