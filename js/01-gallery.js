import { galleryItems } from "./gallery-items.js";

const containerGallery = document.querySelector(".gallery");

const listOfGallery = createGallery(galleryItems);
containerGallery.insertAdjacentHTML("beforeend", listOfGallery);

containerGallery.addEventListener("click", onImgOriginal);

function onImgOriginal(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__link")) {
    return;
  }

  removeActiveClassOfGalleryItem();

  const galleryItem = event.target;
  const parentGaleryItem = galleryItem.closest(".gallery__item");

  addActiveClassOffGalleryItem(parentGaleryItem);
}

function createGallery(items) {
  return items
    .map(({ description, original, previev }) => {
      return `<div class="gallery__item">
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

function removeActiveClassOfGalleryItem() {
  const currentGalleryItem = document.querySelector(".gallery__item.is-active");
  if (currentGalleryItem) {
    currentGalleryItem.classList.remove("is-active");
  }
}

function addActiveClassOffGalleryItem(item) {
  item.classList.add("is-active");
}
