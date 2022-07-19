const alertEvent = document.querySelector(".alert-event");
const alertSender = document.querySelector(".alert-desc"); 
const severeWeather = document.querySelector("#weatherAlerts");

const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=38.9637&lon=-76.9908&exclude=minutely,hourly&units=imperial&appid=cbdbf1656275e48900a3931f13929b10";

apiFetch(url);

async function apiFetch(apiURL) {
  const response = await fetch(apiURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    getAlerts(data);
  } else {
    throw Error(await response.text());
  }
}

function getAlerts(data) {
  alertEvent.innerHTML = `<strong>${data.alerts[0].event}</strong>`; 
  const desc = `${data.alerts[0].sender_name}`;
  
  alertSender.textContent = desc;
}
const closeButton = document.querySelector("#close");
closeButton.innerHTML = 'x'
closeButton.addEventListener('click', () => severeWeather.remove());
severeWeather.append(closeButton);

