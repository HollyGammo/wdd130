const requestURL = "json/templedata.json";
const containers = document.querySelector(".temple-cards");

fetch(URLrequest)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const information = jsonObject["temples"];
    information.forEach(templeData);
});

function templeData(temple) {
    let card = document.createElement("div");
    let imageSmall = document.createElement("img");
    let name = document.createElement("p");
    let streetAddress = document.createElement("p");
    let cityState = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("p");
    let history = document.createElement("p");
    let ordinanceSch = document.createElement("p");
    let sessionSch = document.createElement("p");
    let closureSch = document.createElement("p");
    
    imageSmall.setAttribute('src', "images/" + temple.imageSmall);
    imageSmall.setAttribute('alt', `${temple.name}`);

    name.innerHTML = `${temple.name}`;
    streetAddress.innerHTML = temple.streetAddress;
    cityState.innerHTML = `${temple.cityState}`;
    phone.innerHTML = temple.phone;
    email.innerHTML = `${temple.email}`;
    services.innerHTML = temple.services;
    history.innerHTML = `${temple.history}`;
    ordinanceSch.innerHTML = temple.ordinanceSch;
    sessionSch.innerHTML = `${temple.sessionSch}`;
    closureSch.innerHTML = temple.closureSch;

    containers.appendChild(card);
}