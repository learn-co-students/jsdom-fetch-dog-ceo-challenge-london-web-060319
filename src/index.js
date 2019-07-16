console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
  fetchImages()
  fetchBreeds()
})

// Images
function fetchImages() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImage(json))

}

function renderImage(json) {
  const container = document.getElementById('dog-image-container')
  json.message.forEach(image => {
    const div = document.createElement('div')
    div.innerHTML = `<div><img src='${image}'></div>`
    container.appendChild(div)
  })
}

// Breeds
function fetchBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => renderBreeds(json))
}

function renderBreeds(json) {
  const container2 = document.getElementById('dog-breeds')
  const obj = json.message
  Object.keys(obj).forEach(key => {
    const li = document.createElement('li')
    li.innerHTML = `<li onclick="changeColor(this)">'${key}'</li>`
    container2.appendChild(li)
  })
}

function changeColor(element) {
  element.style.color = "pink";
}

const filter = document.getElementById("breed-dropdown")


function filterBreeds(argument) {
  console.log(argument.value)
  const breeds = document.querySelectorAll('li')
  breeds.forEach(breed => {
    // console.log(breed)
    if (breed.innerText[1] != argument.value) {
      breed.style.display = 'none'
    }
    else { breed.style.display = '' }
  })
}