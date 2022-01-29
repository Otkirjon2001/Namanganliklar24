const elSiteButton = document.querySelector(".active-button");
const elSiteModal = document.querySelector(".modal-box");
const elSiteInput = document.querySelector(".close-img");
elSiteButton.addEventListener("click", function () {
  elSiteModal.classList.remove("none");

});
elSiteInput.addEventListener("click", function () {
  elSiteModal.classList.add("none");
});