console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function dogImg(json) {
    
    json.forEach(item => {
        const elem = document.createElement("img")
        elem.src = item
        document.querySelector("#dog-image-container").appendChild(elem)
    });
}

function changeColor(event) {
    event.target.style.color = "blue"
}   

function fetchDogs() {
     fetch(imgUrl)
    .then(response => response.json())
    .then(json => {
        dogImg(json.message)
    })
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        const dogList = document.querySelector("#dog-breeds")
        dogList.addEventListener('click', changeColor)
        Object.keys(json.message).forEach(item => {
            const newLi = document.createElement("li")
            newLi.innerText = item
            dogList.appendChild(newLi)
            newLi.addEventListener('click', changeColor)
        })
    })
}

function displayDogs(event) {
    const abc = event.target.value
    const list = document.querySelectorAll("li")
    if (abc == "a") {
        list.forEach( item => {
            if (item.innerText[0] == "a") {
                item.style.display = ""
            }
            else {
                item.style.display = "none"
            }
        })
    }
    else if (abc == "b") {
        list.forEach( item => {
            if (item.innerText[0] == "b") {
                item.style.display = ""
            }
            else {
                item.style.display = "none"
            }
        })
    }
    else if (abc == "c") {
        list.forEach( item => {
            if (item.innerText[0] == "c") {
                item.style.display = ""
            }
            else {
                item.style.display = "none"
            }
        })
    }
    else if (abc == "d") {
        list.forEach( item => {
            if (item.innerText[0] == "d") {
                item.style.display = ""
            }
            else {
                item.style.display = "none"
            }
        })
    }
}

function filterDogs() {
    const filters = document.querySelector("#breed-dropdown")
    filters.addEventListener("change", displayDogs)
}



document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchBreeds()
    filterDogs()
  })

