import { galleryItems } from "./gallery-items.js";

const modal = basicLightbox.create(
  `
  <img class="modal-img" src='https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg' alt="img"/>
  `,
  {
    onShow: (modal) => {
      document.addEventListener("keydown", onCloseModalKeydown);
    },
    onclose: (modal) => {
      document.removeEventListener("keydown", onCloseModalKeydown);
    },
  }
);

const containerGallery = document.querySelector(".gallery");
const listOfGallery = createGallery(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", listOfGallery);
containerGallery.addEventListener("click", onImgOriginal);

function onImgOriginal(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const urlImage = event.target.getAttribute("data-source");
  const descrImage = event.target.getAttribute("alt");

  viewOriginalSizeGalleryItem(urlImage, descrImage);
}

function createGallery(items) {
  return items
    .map(({ description, original, preview }) => {
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
    .join(" ");
}

function viewOriginalSizeGalleryItem(url, description) {
  const modalImage = modal.element().querySelector(".modal-img");
  modalImage.setAttribute("src", url);
  modalImage.setAttribute("alt", description);
  modal.show();
}

function onCloseModalKeydown(event) {
  if (event.code === "Escape") {
    modal.close();
  }
}
