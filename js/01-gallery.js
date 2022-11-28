import { galleryItems } from "./gallery-items.js";

const containerGallery = document.querySelector(".gallery");

const listOfGallery = createGallery(galleryItems);
containerGallery.insertAdjacentHTML("beforeend", listOfGallery);
console.log(containerGallery);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, previev }) => {
      return;
      `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${previev}"
                data-source="${original}"
                alt="${description}"
                />
                </a>
        </div>`;
    })
    .join(" ");
}
console.log(galleryItems);
