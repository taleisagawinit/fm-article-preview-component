const toggleButton = document.querySelector(".share-icon");
const shareContainer = document.querySelector(".share-container");

toggleButton.addEventListener("click", function() {
  shareContainer.classList.toggle("show-share-container");
  toggleButton.classList.toggle("toggled-icon");
})