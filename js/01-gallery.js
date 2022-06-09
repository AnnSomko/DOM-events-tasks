import { galleryItems } from "./gallery-items.js";

const parentGallery = document.querySelector(".gallery");
const galleryImages = createGallery(galleryItems);

parentGallery.insertAdjacentHTML("beforeend", galleryImages);

parentGallery.addEventListener("click", onImagesClick);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src= "${preview}"
            data-source= "${original}"
            alt= "${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onImagesClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(e.target.dataset.source);
}

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show();
