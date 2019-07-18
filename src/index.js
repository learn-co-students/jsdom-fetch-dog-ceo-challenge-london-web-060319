console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const uList = document.getElementById("dog-breeds");

document.addEventListener("DOMContentLoaded", function () {
  fetchImages();
  fetchDogBreeds();
})




function fetchImages() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages(json) {
  const imageCard = document.getElementById("dog-image-container");
  json.message.forEach(image => {
    const divImg = document.createElement('div');
    divImg.innerHTML = `<img src=${image}>`;
    imageCard.appendChild(divImg)
  })
}

function fetchDogBreeds() {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreedList(json));
}

function renderBreedList(json) {
  breedArray = []

  for (const theBreed in json.message) {
    const listItem = document.createElement('li');
    breedArray.push(theBreed)


    listItem.innerHTML = theBreed;
    uList.appendChild(listItem);

    listItem.addEventListener("click", function (e) {
      changeColor(listItem);
    })
  }
  filterBreeds(breedArray);

}

function changeColor(element) {
  element.style.color = "green";
}

function filterBreeds(breedArray) {
  const dropdown = document.getElementById('breed-dropdown');

  console.log(breedArray)
  dropdown.addEventListener('change', function (e) {
    uList.innerHTML = ""
    const alphabetFilter = breedArray.filter(breed => breed[0] === e.target.value);
    alphabetFilter.forEach(letterChoice => {
      const li = document.createElement('li');
      li.innerText = letterChoice;
      uList.appendChild(li)
    })
  })

}