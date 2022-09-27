import getWeather from './weatherAPI'

function getUnits() {
  let units
  const unitsElement = document.querySelector('#units')
  if (unitsElement.checked) {
    units = 'metric'
  } else {
    units = 'imperial'
  }
  return units
}

function getLocation() {
  const searchInput = document.querySelector('#searchInput')
  const [city, state] = searchInput.value.split(',')
  return [city, state]
}

async function renderData() {
  try {
    const data = await getWeather()

    let units
    if (getUnits() === 'metric') {
      units = '\u00B0 C'
    } else {
      units = '\u00B0 F'
    }

    const tHead = document.querySelector('#tHead')
    tHead.textContent = `Todays Weather for ${data.name}`

    const description = document.querySelector('#description')
    description.textContent = `Current weather: ${data.weather[0].description}`

    const iconImg = document.querySelector('#iconImg')
    const imgCode = data.weather[0].icon
    iconImg.src = `https://openweathermap.org/img/wn/${imgCode}@2x.png`

    const currentTemp = document.querySelector('#currentTemp')
    currentTemp.textContent = Math.round(data.main.temp) + units

    const humidity = document.querySelector('#humidity')
    humidity.textContent = Math.round(data.main.humidity) + '%'

    const tempHigh = document.querySelector('#tempHigh')
    tempHigh.textContent = Math.round(data.main.temp_max) + units

    const tempLow = document.querySelector('#tempLow')
    tempLow.textContent = Math.round(data.main.temp_min) + units
  } catch {
    alert('Please use (City,ST) format - eg. New York, NY')
  }
}

export { renderData, getUnits, getLocation }
