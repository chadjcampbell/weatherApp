import "./style.scss";

import { renderData, getUnits, changeUnits } from "./dom";

renderData();

const unitsElement = document.querySelector("#units");
unitsElement.addEventListener("change", changeUnits);
