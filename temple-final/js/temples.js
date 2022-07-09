const requestURL =  "https://hollygammo.github.io/wdd130/temple-final/json/temples.json";
const temples = document.querySelector(".temples");

async function findTemples() {
    let response = await fetch(requestURL);
    if (response.ok) {
      let data = await response.json();
      displayTemples(data);
      console.table(data);
    } else {
      throw Error(response.statusText);
    }
  }
  
  function displayTemples(data) {
    data.temples.forEach(temple => {

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

    button.classList.add("likeBtn");

    if (temple.name == "Philadelphia Pennsylvania Temple") {
        button.classList.add('phillyBtn')
        button.setAttribute('onclick', 'phillyCount()');
      } else if (temple.name == "Salt Lake Temple") {
        button.classList.add('slcBtn')
        button.setAttribute('onclick', 'slcCount()');
      } else if (temple.name == "Nauvoo Illinois Temple") {
        button.classList.add('NauvBtn')
        button.setAttribute('onclick', 'NauvCount()');
      } else if (temple.name == "Palmyra New York Temple") {
        button.classList.add('palBtn')
        button.setAttribute('onclick', 'palCount()');
      }
      
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

      document.querySelector('div.temples').append(temples);
 });
} 

findTemples()