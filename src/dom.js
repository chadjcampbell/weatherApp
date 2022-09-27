import getWeather from "./weatherAPI";

async function renderData() {
  const data = await getWeather();
  console.log(data);

  //DOM elements
  const tHead = document.querySelector("#tHead");
  tHead.textContent = `Todays Weather for ${data.name}`;

  console.log(data.weather);

  const description = document.querySelector("#description");
  description.textContent = `It is currently: ${data.weather[0].description}`;
}

export { renderData };
