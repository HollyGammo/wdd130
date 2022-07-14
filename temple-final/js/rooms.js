const requestURL =  "https://hollygammo.github.io/wdd130/temple-final/json/rooms.json";
const suites = document.querySelector(".guest-rooms");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const rooms = jsonObject["rooms"];
    console.log(jsonObject);
    rooms.forEach(innRooms);
  }); 

function innRooms(rooms) {
    let suite = document.querySelector(".roomDiv");
    let image = document.querySelector(".roomPic");
    let image2 = document.querySelector(".roomPic2");
    let name = document.querySelector(".roomName");
    let features = document.querySelector(".roomFeat");
    let check = document.querySelector(".roomCheck");
    let occupancy = document.querySelector(".roomOcc");
    let cancelation = document.querySelector(".roomCan");
    let price = document.querySelector(".roomPrice");
    
    image.setAttribute('src', "images/" + rooms.image);
    image.setAttribute('alt', `${rooms.name}`);
    image2.setAttribute('src', "images/" + rooms.image2);
    image2.setAttribute('alt', `${rooms.name}`);

    name.innerHTML = `${rooms.name}`;
    features.innerHTML = `<strong>Room Features: </strong>${rooms.features}`;
    check.innerHTML = `<strong>Check-in/Check-out: </strong>${rooms.check}`;
    occupancy.innerHTML = `<strong>Occupancy: </strong>${rooms.occupancy}`;
    cancelation.innerHTML = `<strong>Cancelation Policy: </strong>${rooms.cancelation}`;
    price.innerHTML = `<strong>Price: </strong>${rooms.price}`;

      suites.appendChild(suite);
 } 
