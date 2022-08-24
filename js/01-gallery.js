import { galleryItems } from "./gallery-items.js";

const parentGallery = document.querySelector(".gallery");
const galleryImages = createGallery(galleryItems);

parentGallery.insertAdjacentHTML("beforeend", galleryImages);
parentGallery.addEventListener("click", onImagesClick);

function createGallery(items) {
  return items
    .map(
      ({ preview, original, description }) => `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src= "${preview}"
            data-source= "${original}"
            alt= "${description}"
          />
        </a>
      </div>`
    )
    .join("");
}

function onImagesClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", function (e) {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
