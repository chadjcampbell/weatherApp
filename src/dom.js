import getWeather from "./weatherAPI";

function getUnits() {
  let units;
  const unitsElement = document.querySelector("#units");
  if (unitsElement.checked) {
    units = "metric";
  } else {
    units = "imperial";
  }
  console.log(units);
  return units;
}

async function renderData() {
  const data = await getWeather();

  console.log(data);

  //DOM elements
  const tHead = document.querySelector("#tHead");
  tHead.textContent = `Todays Weather for ${data.name}`;

  const description = document.querySelector("#description");
  description.textContent = `Current weather: ${data.weather[0].description}`;

  const iconImg = document.querySelector("#iconImg");
  const imgCode = data.weather[0].icon;
  iconImg.src = `http://openweathermap.org/img/wn/${imgCode}@2x.png`;

  const currentTemp = document.querySelector("#currentTemp");
  currentTemp.textContent = Math.round(data.main.temp);

  const humidity = document.querySelector("#humidity");
  humidity.textContent = Math.round(data.main.humidity) + "%";

  const tempHigh = document.querySelector("#tempHigh");
  tempHigh.textContent = Math.round(data.main.temp_max);

  const tempLow = document.querySelector("#tempLow");
  tempLow.textContent = Math.round(data.main.temp_min);
}

export { renderData, getUnits };
