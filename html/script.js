document.querySelector(".navbar").style.display = "flex";

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelector(".image-grid").querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

let map;

function initMap() {
  const shard = { lat: 51.504501, lng: -0.0865 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.504501, lng: -0.0865 },
    zoom: 15,
    center: shard,
  });
  const marker = new google.maps.Marker({
    position: shard,
    map: map,
  });
}
