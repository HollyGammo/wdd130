const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#con-desc");
const humidityPrcnt = document.querySelector("#humidity");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const wIcon = document.querySelector("#w-icon1");
const wIcon = document.querySelector("#w-icon2");
const wIcon = document.querySelector("#w-icon2");
const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.9637&lon=-76.9908&exclude=minutely,hourly&units=imperial&appid=42b85a0a1dd9570bad1f6f146629adac";

async function apiFetch(apiURL) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
  } 
}

apiFetch(url);

function displayResults(data) {
  currentTemp.innerHTML = `${data.current.temp.toFixed(0)} &#176;F`;
  humidityPrcnt.innerHTML = `${data.current.humidity}%`;

  const dayOne = data.daily[0];
  const dayTwo = data.daily[1];
  const dayThree = data.daily[2];
  const tempOne = data.daily[0].temp.day;
  const tempTwo = data.daily[1].temp.day;
  const tempThree = data.daily[2].temp.day;
  
  const wIcon = document.querySelector("#w-icon1");
  const wIcon = document.querySelector("#w-icon2");
  const wIcon = document.querySelector("#w-icon2");

  dayTemp.innerHTML = `${data.daily.toFixed(0)}`;

  const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
  const desc = data.current.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;

  const imagesrc = "https://openweathermap.org/img/w/" + data[i].weather[0].icon + ".png";
  const description = data[i].weather[0].description;
  wIcon[i].setAttribute("src", imagesrc);
  wIcon[i].setAttribute("alt", description);
  dayTemp[i].innerHTML = Math.round(data[i].main.temp) + " &#176;F";
   
}