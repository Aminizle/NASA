document.querySelector("#searchButton").addEventListener("click", getImage);
window.onload = initializeAPOD; 

const key = "JU7IDnJ2gDoCgPj1aE6mcfSmqtgIkDwcyKXp9eTD";

// Initialize with today's date
function initializeAPOD() {
  const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
  document.querySelector("#input").value = today; // Set default date
  getImage(); // Fetch today's APOD
}

function getImage() {
  let date = document.querySelector("#input").value;

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".name").innerText = data.title;
      document.querySelector(".description").innerText = data.explanation;
      document.querySelector("img").src = data.hdurl || data.url; // Fallback to `url` if `hdurl` is missing
    })
    .catch((err) => {
      console.log(`error ${err}`);
      document.querySelector(".description").innerText = "Failed to fetch APOD. Try another date.";
    });
}