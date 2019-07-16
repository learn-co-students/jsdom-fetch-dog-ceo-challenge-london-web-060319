// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dropDown = document.getElementById('breed-dropdown')

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
  })

function fetchDogs() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message));
  }

  function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => breedList(json.message))
    .then(json => breedList(json.message))
}

  function breedList(data) {
    const dogList = document.getElementById('dog-breeds')
    Object.keys(data).forEach(breed => {
          dogList.innerHTML += `<li onclick="changeColor(this)">${breed} </li>` ;
        })
    }

function renderImages(data) {
    const dogBox = document.getElementById('dog-image-container')
      data.forEach(dog => {
        const img = document.createElement('img')
        img.src = `${dog}`
        dogBox.appendChild(img)
    })
}

function changeColor(element) {
    element.style.color = "blue";
}

function filterBreeds(element) {
    const value = element.value.toLowerCase();  
    let listElements = document.querySelectorAll('li')
    listElements.forEach(breed => {
        if (value === 'all') {
            console.log('1')
            breed.style.display = '';
        } else if (breed.innerText[0].toLowerCase() == value ){
            console.log('2')
            breed.style.display = "";
        } else {
            console.log('3')
            breed.style.display = "none";
        }
    })
}






  