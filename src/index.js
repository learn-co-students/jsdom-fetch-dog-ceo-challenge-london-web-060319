console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
    // fetchAndCallShowImages(imgUrl);
    fetchAndCallShowBreeds(breedUrl);
    breedByLetter();
})

function fetchAndCallShowImages(imgUrl){
    fetch(imgUrl)
    .then(imgs => imgs.json())
    .then(imagesObject => showImages(imagesObject["message"]));
}

function showImages(imagesObject) {
    imagesObject.map(img => {
        const divImages = document.querySelector("div#dog-image-container");
        divImages.innerHTML += `<img src=${img}>`;
    })
}

function fetchAndCallShowBreeds(breedUrl) {
    fetch(breedUrl)
    .then(breeds => breeds.json())
    .then(breedsObject => showBreeds(breedsObject["message"]));
}

function changeColourAtClick(element) {
    element.style.color = "aqua"
}

function showBreeds(breedsObject) {
    const breedUl = document.querySelector("ul#dog-breeds");
    for (const breedKey in breedsObject) {
        let breedLi = document.createElement("li");
        if (breedsObject[breedKey].length == 0) {
            breedLi.innerText = `${capitalize(breedKey)}`;
            breedLi.addEventListener("click", () => changeColourAtClick(breedLi))
            breedUl.appendChild(breedLi);
        } else {
            for (const type of breedsObject[breedKey]) {
                let breedLi = document.createElement("li");
                breedLi.innerText = `${capitalize(type)} ${capitalize(breedKey)}`
                breedLi.addEventListener("click", () => changeColourAtClick(breedLi))
                breedUl.appendChild(breedLi);
            };
        }
    }
}

function breedByLetter() {
    const selectNode = document.querySelector("select#breed-dropdown")
    selectNode.addEventListener("change", (event) => {
        const letter = event.target.value
        const allBreeds = document.querySelectorAll("ul li");
        for (const breed of allBreeds) {
            if (breed.innerText.charAt(0).toLowerCase() == letter) {
                breed.style.display = "block";
            } else {
                breed.style.display = "none";
            }
        }
    })
};

// could ask api only items that start with whatever letter
// could select only those that start with whatever letter between showBreeds items

// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]