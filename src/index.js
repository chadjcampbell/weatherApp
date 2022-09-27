import "./style.scss";
import { renderData, getLocation } from "./dom";

renderData();
getLocation();

const unitsElement = document.querySelector("#units");
unitsElement.addEventListener("change", renderData);

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", renderData);
