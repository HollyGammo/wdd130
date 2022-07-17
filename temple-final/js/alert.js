const severeWeather = document.querySelector(".weather-alerts");
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
    let warning = document.createElement("div");
    let event = document.createElement("p");
    let tags = document.createElement("p");
    let description = document.createElement("p");

    event.innerHTML = `${data.alerts.event}Event:`;
    tags.innerHTML = `${data.alerts.tags}End:`;
    description.innerHTML = `${data.alerts.description}Descriptions:`;
    
    warning.appendChild(event);
    warning.appendChild(tags);
    warning.appendChild(description);
    severeWeather.appendChild(warning);  
};

getAlerts()

const close = document.querySelector(".close");
close.addEventListener('click', closeFunction);

function closeFunction() {
    this.parentElement.style.display = 'none';
}