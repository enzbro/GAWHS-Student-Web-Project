// DATA

const roomData = {
    "room-101": {
        name: "Room 101",
        classes: ["AP Calculus BC", "Math 3 Honors"],
        teachers: ["Ms. Zheng"],
        clubs: ["Highlighter Flipping Association"]
    },

    "room-102": {
        name: "Room 102",
        classes: ["Sleep 1, Sleep 1H, Sleep 2, Sleep 2H, AP Naptime"],
        teachers: ["Kaden K. Kim"],
        clubs: []
    },
    "room-103": {
        name: "Room 103",
        classes: ["AP Lunch", "AP Naptime"],
        teachers: ["Brian, Chao"],
        clubs: ["Larp Club, National Goon Society, GSA"]
    },
    "room-104": {
        name: "Room 104",
        classes: ["Sex ED", "Genital Biology Honors"],
        teachers: ["Mr. Leon"],
        clubs: []
    }
};


// CODE

const room101 = document.getElementById("room-101");
const room102 = document.getElementById("room-102");
const roomInfo = document.getElementById("room-info");

room101.addEventListener("click", function() {
    roomInfo.innerHTML = `
        <h2>${roomData["room-101"].name}</h2>
        <p>${roomData["room-101"].classes.join(", ")}</p>
        <p>${roomData["room-101"].teachers.join(", ")}</p>
        <p>${roomData["room-101"].clubs.join(", ")}</p>
    `;
});
room102.addEventListener("click", function() {
    roomInfo.innerHTML = `
        <h2>${roomData["room-102"].name}</h2>
        <p>${roomData["room-102"].classes.join(", ")}</p>
        <p>${roomData["room-102"].teachers.join(", ")}</p>
        <p>${roomData["room-102"].clubs.join(", ")}</p>
    `;
});
room103.addEventListener("click", function() {
    roomInfo.innerHTML = `
        <h2>${roomData["room-103"].name}</h2>
        <p>${roomData["room-103"].classes.join(", ")}</p>
        <p>${roomData["room-103"].teachers.join(", ")}</p>
        <p>${roomData["room-103"].clubs.join(", ")}</p>
    `;
});
room104.addEventListener("click", function() {
    roomInfo.innerHTML = `
        <h2>${roomData["room-104"].name}</h2>
        <p>${roomData["room-104"].classes.join(", ")}</p>
        <p>${roomData["room-104"].teachers.join(", ")}</p>
        <p>${roomData["room-104"].clubs.join(", ")}</p>
    `;
});


//idk how to make this work for all rooms but its here
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
