
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9637&lon=-76.9908&exclude=minutely,hourly&units=imperial&appid=cbdbf1656275e48900a3931f13929b10";
const badWeather = document.querySelector(".weather-alerts");

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
    let warning = document.createElement("div");
    let alert = document.createElement("p");
    let sender = document.createElement("p");
    let description = document.createElement("p");
    let start = document.createElement("p");
    let end = document.createElement("p");

    alert.innerHTML = `${data.alerts.event}<strong>Event: </strong>`;
    sender.innerHTML = `${data.alerts.alertsURLsender_name}Sender:`;
    description.innerHTML = `${data.alerts.description}Descriptions:`;
    start.innerHTML = `${data.alerts.start}Start:`;
    end.innerHTML = `${data.alerts.end}End:`;
    
    badWeather.appendChild(warning);  
}

if(badWeather.getAlerts() === alerts) {
    document.getElementById("#banner").style.display = "block";
}

const close = document.querySelector(".stop");
close.addEventListener("click", () => {
    banner.style.display = "none";
});