const elSiteModal = document.querySelector(".js-modal");
const elCloseButton = elSiteModal.querySelector(".js-close-box");
if(elSiteModal){
  elCloseButton.addEventListener("click", function () {
    elSiteModal.classList.add("none");
  });
}
setTimeout(function(){
  elSiteModal.classList.add("modal--open");
}, 3000)
