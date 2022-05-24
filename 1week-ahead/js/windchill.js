const temp = document.getElementById('temp').innerHTML;
const windSpeed = document.getElementById('windspeed').innerHTML;


let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * temp * Math.pow(windSpeed, .16));
  if (temp <= 50 && windSpeed > 3) {
     windChill = Math.round(windChill);
  } else {
     windChill = "N/A";
  }
document.getElementById('windchill').innerHTML = windChill;