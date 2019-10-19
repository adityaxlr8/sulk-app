
const form = document.querySelector('form')
const input = document.getElementById('searchTerm');
let apiUrl = "https://pixabay.com/api"
let apiKey ='13952898-845e19960791ff710f2e0205e'
let loadingImage = document.querySelector('#loadingImage') 
const imageSection = document.querySelector('.images')
let buttonSection = document.querySelector('.button')


loadingImage.style.display = 'none'



form.addEventListener('submit', formSubmitted)


function formSubmitted(event) {
    event.preventDefault();
    const searchTerm = input.value;
    search(searchTerm)
        .then(displayImages)  
}

function search(searchTerm) {
    url=`${apiUrl}/?key=${apiKey}&q=${searchTerm}&image_type=photo&safesearch=true&per_page=50`
    loadingImage.style.display = ''
    imageSection.innerHTML =''
    return fetch(url)
        .then(response=>response.json() )
        .then(result=>{
            return result.hits
        })
    }
    
   


    function displayImages(images) {
        imageSection.innerHTML =''
        images.map(image=>{
            const imageElement = document.createElement('img')
            imageElement.src = image.largeImageURL          
            imageSection.appendChild(imageElement)
            const btn = document.createElement("button")
            btn.innerHTML = "AddCaption"
        
               btn.onclick = function () {
                sessionStorage.setItem("image", JSON.stringify(image));  
                location.href = "addcaption.html"  
            };
            imageSection.appendChild(btn)          
        })
    loadingImage.style.display = 'none'
    
 }

 sessionStorage.clear()
