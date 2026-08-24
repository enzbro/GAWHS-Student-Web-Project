// DATA (temporary, will probably use a json file for all the data later)

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
