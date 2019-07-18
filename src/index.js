document.addEventListener("DOMContentLoaded", () => {
    fetchDogData()
    fetchAllDogs()

    let filter= document.querySelector('#breed-dropdown')
    filter.addEventListener('change', breedsFilter)


    function fetchDogData() {
        fetch("https://dog.ceo/api/breeds/image/random/4")
            .then(resp=>resp.json())
            .then(json=>showDogs(json))
    }

    function showDogs(json){
        const dogImage= document.querySelector('div#dog-image-container'); 
        json.message.forEach(image=>{
            const img=document.createElement("img")
            img.src= image
            dogImage.appendChild(img)
        })
    }

    function fetchAllDogs(){
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response=>response.json()) //take json and parse into jso
        .then(jso=>showAllDogs(Object.keys(jso.message)))
    }

    function breedsFilter(){
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response=>response.json())
        .then(dogBreeds=> {
            const dogBreedArray = Object.keys(dogBreeds.message)
            const filteredBreeds = dogBreedArray.filter(breed=>breed[0]===filter.value)

            showAllDogs(filteredBreeds)
        })
    }

    function showAllDogs(dogBreedArray){
        const dogBreeds=document.querySelector('#dog-breeds')

        // for(const dogbreed in json) {
        //     const newLi = document.createElement('li')
        //     newLi.innerText = `${dogbreed}`
        //     newLi.addEventListener('click',changeColor)
        //     dogBreeds.appendChild(newLi)
        // }
        dogBreeds.innerHTML = ""

        dogBreedArray.forEach(dogbreed=> {
            const newLi = document.createElement('li')
            newLi.innerText = `${dogbreed}`
            newLi.addEventListener('click',changeColor)
            dogBreeds.appendChild(newLi)
        })

        function changeColor (){
            // debugger
            if (this.style.color=='blue'){
                this.style.color="black"
            } else {
                this.style.color="blue"
            }
        }
    }
});
    
  

