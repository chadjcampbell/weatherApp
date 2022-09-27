import "./style.scss";

import { renderData, getUnits } from "./dom";

renderData();

const unitsElement = document.querySelector("#units");
unitsElement.addEventListener("change", getUnits);
