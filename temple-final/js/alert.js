const alertsURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9637&lon=-76.9908&exclude=minutely,hourly&units=imperial&appid=cbdbf1656275e48900a3931f13929b10";
const alerts = document.querySelector(".weather-alerts");

async function getAlerts() {
    let response = await fetch(alertURL);
    if (response.ok) {
        let data = await response.json();
        displayAlerts(data);
    } else {
        throw Error(response.statusText);
    }
}

function displayAlerts(data) {
    let warning = document.createElement("div");
    let event = document.createElement("p");
    let sender = document.createElement("p");
    let description = document.createElement("p");
    let start = document.createElement("p");
    let end = document.createElement("p");
    
    event.textContent = `<strong>Event: </strong>${data.event}`;
    sender.textContent = `Sender: ${data.sender_name}`;
    description.textContent = `Descriptions: ${data.description}`;
    start.textContent = `Start: ${data.start}`;
    end.textContent = `End: ${data.end}`;
    
    alerts.appendChild(warning);  
}

getAlerts()

const dismiss = document.querySelector('.dismiss');
dismiss.addEventListener('click', endFunction);

function endFunction() {
    this.parentElement.style.display = 'none';
}