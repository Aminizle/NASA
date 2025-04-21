//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('#searchButton').addEventListener('click', getImage)
window.onload = getImage;

let selectedDate = new Date().toISOString().split('T')[0]
document.querySelector('#input').value = selectedDate


function getImage() {

// let date = document.querySelector('#input').value

fetch(`/.netlify/functions/fetch-nasa?date=${selectedDate}`)
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



