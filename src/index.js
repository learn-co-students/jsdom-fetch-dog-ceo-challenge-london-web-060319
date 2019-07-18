console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function fetchImages(){
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderImage(json))
}

function fetchBreed(){
  return fetch("https://dog.ceo/api/breeds/list/all")
 .then(resp = > resp.json())
 .then(json => renderBreeds(json))
}

function renderBreeds(json){
  const breeds = document.querySelector("dog-breeds")
  const obj = json.message
  Object.keys(obj).forEach(key =>{
    const li = document.createElement('li')
    li.innerHTML = `<li onclick="changeColor(this)">'${key}'</li>`
    breeds.appendChild(li)
  })

}
