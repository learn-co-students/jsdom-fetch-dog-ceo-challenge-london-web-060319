console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
  fetchImages()
  fetchBreeds()
});

function fetchImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => renderImages(json));
}

function renderImages(json) {
  const imgContainer = document.querySelector('div#dog-image-container')
  json.message.forEach(image => {
    const div = document.createElement('div')
    div.innerHTML = `<img src="${image}" alt="Dog">`
    imgContainer.appendChild(div)
  })
}

function fetchBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json) {
  const breedContainer = document.querySelector('ul#dog-breeds')
  Object.keys(json.message).forEach(breed => {
    const li = document.createElement('li')
    li.innerHTML = `${breed}`
    li.addEventListener('click', changeColor);
    breedContainer.appendChild(li)
})
}

function changeColor() {
    this.style.color = "red";
}


function breedFilter(element) {
  let value = element.value;
  let listBreeds = document.querySelectorAll('li')
  listBreeds.forEach(breed => {
    if (breed.innerText[0] != value){
      breed.style.display = 'none';
    } else {
      breed.style.display = '';
    }
  })
}
