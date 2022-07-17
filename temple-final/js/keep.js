const cards = document.querySelector('.cards');
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
  
  function displayResults(weatherData) {
    for (let i = 0; i < 4; i++) {
      const time = weatherData.daily[i];
      const card = document.createElement('div');
      const h3 = document.createElement('h3');
      const temperature = document.createElement('p');
      const humidity = document.createElement('p');
      const image = document.createElement('img');
      const weather = document.createElement('p');
  
      const date = new Intl.DateTimeFormat("en-US", {
        dateStyle: "full"
      }).format(new Date(time.dt * 1000));
  
      if (i == 0) {
        h3.textContent = `Today's Weather:`;
      } else {
        h3.textContent = `${date}`;
      }
  
      const desc = toTitleCase(time.weather[0].description);
      temperature.textContent = `Temp: ${time.temp.day.toFixed(0)} °F`;
      humidity.textContent = `Humidity: ${time.humidity}%`;
      weather.textContent = desc
  
      image.setAttribute('src', `https://openweathermap.org/img/w/${time.weather[0].icon}.png`);
      image.setAttribute('alt', desc);
  
      card.appendChild(h3);
      card.appendChild(image);
      card.appendChild(weather);
      card.appendChild(temperature);
      card.appendChild(humidity);
  
      cards.appendChild(card);
    };
  }
  
  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  
  apiFetch()