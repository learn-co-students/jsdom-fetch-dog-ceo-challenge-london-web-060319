console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreed()
})

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(json => renderImage(json))
  }

function renderImage(json) {
    const container = document.getElementById('dog-image-container')
    json.message.forEach(element => {
      const div = document.createElement('div')
      div.innerHTML = `<div><img src='${element}'></div>`
      container.appendChild(div)
    })
  } 

function fetchBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreed(json))
}

function renderBreed(json) {    
    const breedContainer = document.querySelector('ul#dog-breeds')
    const dropDown = document.getElementById("breed-dropdown")
    Object.keys(json.message).forEach(breed => {
    const li = document.createElement('li')
            li.innerHTML = `${breed}`
            li.addEventListener('click', function(event) {
            li.style.color = "red"
        })
        breedContainer.appendChild(li)
        })
    }

    function filterBreeds(argument){
        console.log(argument.value)
        const breeds = document.querySelectorAll('li')
        breeds.forEach(breed => {
            // console.log(breed)
        if (breed.innerText[0] != argument.value){
            breed.style.display = 'none'}
        else {breed.style.display = ''}
        })
    } 