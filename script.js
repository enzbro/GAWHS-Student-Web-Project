//-----------------[ Outer UI ]-----------------\\

const campusView = document.getElementById("campus-view");
const buildingView = document.getElementById("building-view");
const roomInfo = document.getElementById("room-info");
const backButton = document.getElementById("back-button");
const campusMap = document.getElementById("campus-map");

document.querySelectorAll(".building-section").forEach(button => {
    button.addEventListener("click", () => {
        const building = button.dataset.building;

        campusView.hidden = true;
        buildingView.hidden = false;
        roomInfo.hidden = false;
        backButton.hidden = false;
        campusMap.style.display = "none";

        document.getElementById("building-title").textContent =
            `Building ${building}`;
    });
});

document.getElementById("back-button").addEventListener("click", () => {
    buildingView.hidden = true;
    campusView.hidden = false;
    roomInfo.hidden = true;
    backButton.hidden = true;
    campusMap.style.display = "block";
});


//-----------------[ Inner UI ]-----------------\\

let rooms = {};

// Load the JSON file

//fetch kinda does its own thing while the code goes on
// so we use .then() to wait for the data to load before we can use it.
fetch("information.json")
    //converts the json info into a js object so we can use it
    //the => is an op meta for function() {} and is called an arrow function
    //.then waits for the fetch to finish before running the next function which needs the data from the fetch
    .then(response => response.json())
    //takes the data from the previous .then and puts it into a brand new rooms variable
    .then(data => {
        rooms = data;
        console.log("Rooms loaded!", rooms);
    })
    .catch(error => {
        console.error("Error loading rooms:", error);
    });

// Listen for clicks on rooms
// We use querySelectorAll to select all elements with the class "room" or "restroom"
// idk why but it uses .room like the css instead of the html id
document.querySelectorAll(".room, .restroom").forEach(room => {
    //gives each room its own click listener
    room.addEventListener("click", () => {
        // Find this room's html id, which is also the same as the id in the json file
        const info = rooms[room.id];
        // If the room is not found in the JSON, log an error and return
        if (!info) {
            console.log("No information found for", room.id);
            return;
        }

        // Display the information
        // Only display teacher and subject if they exist
        document.getElementById("room-info").innerHTML = `
      <h2>${info.name}</h2>
      <h3>${info.teacher ? `<p>Teacher: ${info.teacher}</p>` : ""}</h3>
      <h4>${info.subjects ? `<p>Subject: ${info.subjects.join(", ")}</p>` : ""}</h4>
      <br>
      <p>${info.description}</p>
    `;
    });
});
