// DATA (temporary, will probably use a json file for all the data later)
/*
const roomData = {
    "room-101": {
        name: "Room 101",
        classes: ["AP Calculus BC", "Math 3 Honors"],
        teachers: ["Ms. Zheng"],
        clubs: ["Highlighter Flipping Association"],
    },

    "room-102": {
        name: "Room 102",
        classes: ["Sleep 1, Sleep 1H, Sleep 2, Sleep 2H, AP Naptime"],
        teachers: ["Kaden K. Kim"],
        clubs: [],
    },
    "room-103": {
        name: "Room 103",
        classes: ["AP Lunch", "AP Naptime"],
        teachers: ["Brian, Chao"],
        clubs: ["Larp Club, National Goon Society, GSA"],
    },
    "room-104": {
        name: "Room 104",
        classes: ["Sex ED", "Genital Biology Honors"],
        teachers: ["Mr. Leon"],
        clubs: [],
    },
};

// CODE (op code by op brine)
const roomInfo = document.getElementById("room-info");
const map = document.getElementById("map");
map.addEventListener("click", function (event) {
    const clicked = event.target;
    if (clicked.classList.contains("room")) {
        const room = clicked.id;
        console.log("Clicking Room works.");
        displayRoomInfo(room);
    }
});

//i made changes here too!

//op function
function displayRoomInfo(roomId) {
    const room = roomData[roomId];
    if (room) {
        roomInfo.innerHTML = `
            <h2>${room.name}</h2>
            <p>Classes: ${room.classes.join(", ")}</p>
            <p>Teachers: ${room.teachers.join(", ")}</p>
            <p>Clubs: ${room.clubs.join(", ")}</p>
        `;
    }
}

*/


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
