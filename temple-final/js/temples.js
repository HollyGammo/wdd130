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
    address.innerHTML = temple.streetAddress;
    city.innerHTML = `${temple.cityState}`;
    phone.innerHTML = temple.phone;
    email.innerHTML = `${temple.email}`;
    services.innerHTML = temple.services;
    history.innerHTML = `${temple.history}`;
    ordinances.innerHTML = temple.ordinanceSch;
    sessions.innerHTML = `${temple.sessionSch}`;
    closures.innerHTML = temple.closureSch;

      cards.appendChild(card);
 } 


 //////  LIKE BUTTON   /////
 $(".like-btn").click( function() {

	$(this).toggleClass('clicked');
    event.preventDefault();

});

$(".panel-group_btn span").click(function(){
const btnStorage = $(this).attr("id");

if($(this).hasClass("clicked")) {
    localStorage.setItem(btnStorage, 'true');
} else {
    localStorage.removeItem(btnStorage, 'true');
}
});


$( ".panel-group_btn span" ).each(function() {
const mainlocalStorage = $( this ).attr( "id" );

    if(localStorage.getItem(mainlocalStorage) == 'true') {
        $(this).addClass("clicked");
    } else {
        $(this).removeClass("clicked");
    }
});