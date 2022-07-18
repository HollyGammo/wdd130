const forecast = document.querySelector(".weather-days");
const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=38.9637&lon=-76.9908&exclude=minutely,hourly&units=imperial&appid=cbdbf1656275e48900a3931f13929b10";

apiFetch(url);

async function apiFetch(apiURL) {
  const response = await fetch(apiURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayResults(data);
  } else {
    throw Error(await response.text());
  }
}

function displayResults(data) {
  for (let i = 0; i < 4; i++) {
    const dayData = data.daily[i];
    const wDiv = document.createElement("div");
    const wTitle = document.createElement("p");
    const image = document.createElement("img");
    const dayTemp = document.createElement("p");
    const wDesc = document.createElement("p");
    const humidity = document.createElement("p");
    const forecastDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(new Date(dayData.dt * 1000));

    if (i == 0) {
      wTitle.textContent = `Today's Weather:`;
    } else {
      wTitle.textContent = `${forecastDate}`;
    }

    const desc = dayData.weather[0].description;
    dayTemp.textContent = `${dayData.temp.day.toFixed(0)} °F`;
    humidity.textContent = `Humidity: ${dayData.humidity}%`;
    wDesc.textContent = capitalize(desc);

    image.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`
    );
    image.setAttribute("alt", desc);

    wDiv.appendChild(wTitle);
    wDiv.appendChild(image);
    wDiv.appendChild(dayTemp);
    wDiv.appendChild(wDesc);
    wDiv.appendChild(humidity);
    forecast.appendChild(wDiv);
  }
}

function capitalize(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

/*=====ALERTS=====*/
const severeWeather = document.querySelector(".weather-alerts");

function getAlerts(data) {
    const warning = document.createElement("div");
    const event = document.createElement("p");
    const tags = document.createElement("p");
    const description = document.createElement("p");

    event.textContent = `${data.alerts.event}Event:`;
    tags.textContent = `${data.alerts.tags}End:`;
    description.textContent = `${data.alerts.description}Descriptions:`;
    
    warning.appendChild(event);
    warning.appendChild(tags);
    warning.appendChild(description);
    severeWeather.appendChild(warning);  
}

getAlerts()

const close = document.querySelector("#close");
close.addEventListener('click', () => {
    severeWeather.style.display = 'none';
});