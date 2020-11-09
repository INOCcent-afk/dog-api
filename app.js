const button = document.querySelector("button");
const imgContainer = document.querySelector(".img-container");

button.addEventListener("click", fetchDog);

function fetchDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      src = data["message"];
      imgElement = `<img src="${src}" alt="">`;
      imgContainer.innerHTML += imgElement;
    })
    .catch();
}
