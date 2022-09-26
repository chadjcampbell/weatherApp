let cityName = "New York";
let stateCode = "NY";
let units = "imperial";

async function getCoords() {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},USA&limit=5&appid=4e5a394bdfae8d05132f477470e49bbc`,
    { mode: "cors" }
  );
  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  return { lat, lon };
}

export default async function getWeather() {
  const { lat, lon } = await getCoords();
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e5a394bdfae8d05132f477470e49bbc&units=${units}`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
}
