// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.getElementById('breed-dropdown')
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
  
  })

  function fetchDogs() {
    return fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => renderDogs(json.message));
  }

  function renderDogs(data) {
    const dogBox = document.querySelector("#dog-image-container")
    data.forEach(dog => {
      const img = document.createElement("img")
      img.src = `${dog}`
      dogBox.appendChild(img)
    })
  }

  function fetchBreeds() {
      return fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => renderBreeds(json.message));
  }

  function renderBreeds(data) {
      const dogList = document.querySelector("#dog-breeds")
      Object.keys(data).forEach(breed => {
          dogList.innerHTML += `<li onclick="changeColor(this)">${breed}</li>`
      })
  }

  function changeColor(element){
      element.style.color = "pink"
  }

  function filterBreeds(element) {
      const value = element.value.toLowerCase();
      let listElements = document.querySelectorAll('li')
      listElements.forEach(breed => {
          if (breed.innerText[0].toLowerCase() == value || value === 'all') {
              breed.style.display = "";
          } else {
              breed.style.display = "none";
          }
      })
  }