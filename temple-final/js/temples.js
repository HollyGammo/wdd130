const requestURL =  "https://hollygammo.github.io/wdd130/temple-final/json/temples.json";
const cards = document.querySelector('.temple-cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    console.log(jsonObject);
    temples.forEach(templeCard);
  }); 

function templeCard(temple) {
    let card = document.querySelector(".tempDiv");
    let imageSmall = document.querySelector(".tempPic");
    let name = document.querySelector(".tempName");
    let address = document.querySelector(".tempAddress");
    let city = document.querySelector(".tempCity");
    let phone = document.querySelector(".tempPhone");
    let email = document.querySelector(".tempWeb");
    let services = document.querySelector(".tempServ");
    let history = document.querySelector(".tempHist");
    let ordinances = document.querySelector(".tempOrd");
    let sessions = document.querySelector(".tempSess");
    let closures = document.querySelector(".tempClose");
    
    imageSmall.setAttribute('src', "images/" + temple.imageSmall);
    imageSmall.setAttribute('alt', `${temple.name}`);

    name.innerHTML = `${temple.name}`;
    address.innerHTML = `${temple.streetAddress}`;
    city.innerHTML = `${temple.cityState}`;
    phone.innerHTML = `${temple.phone}`;
    email.innerHTML = `${temple.email}`;
    services.innerHTML = `Services: ${temple.services}`;
    history.innerHTML = `History: ${temple.history}`;
    ordinances.innerHTML = `Ordinance Schedule: ${temple.ordinanceSch}`;
    sessions.innerHTML = `Session Schedule: ${temple.sessionSch}`;
    closures.innerHTML = `Temple Closures: ${temple.closureSch}`;

      cards.appendChild(card);
 } 


 //=======LIKE BUTTONS========//
templeCard ()

function phillyCount() {
  if (localStorage.likePhilly) {
    localStorage.likePhilly = Number(localStorage.likePhilly) + 1;
  } else {
    localStorage.likePhilly = 0;
  }
  document.getElementById("likePhilly").innerHTML = localStorage.likePhilly;
}

function slCount() {
  if (localStorage.likeSlc) {
    localStorage.likeSlc = Number(localStorage.likeSlc) + 1;
  } else {
    localStorage.likeSlc = 0;
  }
  document.getElementById("likeSlc").innerHTML = localStorage.likeSlc;
}

function nauvooCount() {
  if (localStorage.likeNauvoo) {
    localStorage.likeNauvoo = Number(localStorage.likeNauvoo) + 1;
  } else {
    localStorage.likeNauvoo = 0;
  }
  document.getElementById("likeNauvoo").innerHTML = localStorage.likeNauvoo;
}

function palmyraCount() {
  if (localStorage.likePalmyra) {
    localStorage.likePalmyra = Number(localStorage.likePalmyra) + 1;
  } else {
    localStorage.likePalmyra = 0;
  }
  document.getElementById("likePalmyra").innerHTML = localStorage.likePalmyra;
}

function dcCount() {
  if (localStorage.likeDc) {
    localStorage.likeDc = Number(localStorage.likeDc) + 1;
  } else {
    localStorage.likeDc = 0;
  }
  document.getElementById("likePhilly").innerHTML = localStorage.likeDc;
}

function mesaCount() {
  if (localStorage.likeMesa) {
    localStorage.likeMesa = Number(localStorage.likeMesa) + 1;
  } else {
    localStorage.likeMesa = 0;
  }
  document.getElementById("likeMesa").innerHTML = localStorage.likeMesa;
}

