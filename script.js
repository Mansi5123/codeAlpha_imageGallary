let currentImageIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  images = Array.from(document.querySelectorAll('.gallery-item img'));
  currentImageIndex = images.indexOf(imgElement);

  lightbox.classList.add("active");
  lightboxImg.src = imgElement.src;
}


function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;

  document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

function filterImages(category) {
  const items = document.querySelectorAll(".gallery-item");

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
