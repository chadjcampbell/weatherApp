import "./style.scss";
import getWeather from "./weatherAPI";

let currentWeather = getWeather();
console.log(currentWeather);
