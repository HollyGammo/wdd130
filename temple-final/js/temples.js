const requestURL =  "https://hollygammo.github.io/wdd130/temple-final/json/temples.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const temples = jsonObject['temples'];
    const cards = document.querySelector('.cards');

    temples.forEach(temple => {
    let card = document.createElement("div");
    let imageSmall = document.createElement("img");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let city = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let services = document.createElement("p");
    let history = document.createElement("p");
    let ordinances = document.createElement("p");
    let sessions = document.createElement("p");
    let closures = document.createElement("p");
    
    imageSmall.setAttribute('src', "images/" + temple.imageSmall);
    imageSmall.setAttribute('alt', `${temple.name}`);

    name.innerHTML = `${temple.name}`;
    address.innerHTML = temple.streetAddress;
    city.innerHTML = `${temple.cityState}`;
    phone.innerHTML = temple.phone;
    email.innerHTML = `${temple.email}`;
    services.innerHTML = temple.services;
    history.innerHTML = `${temple.history}`;
    ordinances.innerHTML = temple.ordinanceSch;
    sessions.innerHTML = `${temple.sessionSch}`;
    closures.innerHTML = temple.closureSch;
      
      card.appendChild(imageSmall);
      card.appendChild(button);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(city);
      card.appendChild(phone);
      card.appendChild(email);
      card.appendChild(services);
      card.appendChild(history);
      card.appendChild(ordinances);
      card.appendChild(sessions);
      card.appendChild(closures);

      cards.append(card);
 });
}); 
