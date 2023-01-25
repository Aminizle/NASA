//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('#searchButton').addEventListener('click', getImage)
window.onload = getImage;



const key = "JU7IDnJ2gDoCgPj1aE6mcfSmqtgIkDwcyKXp9eTD"


function getImage() {

let date = document.querySelector('#input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
    .then( res => res.json())
    .then( data => {
        console.log(data)
       
        document.querySelector('.name').innerText = data.title              
        document.querySelector('.description').innerText = data.explanation
        document.querySelector('img').src = data.hdurl

    })
    .catch(err => {
        console.log(`error ${err}`)
        
    });
}



