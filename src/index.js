import './style.scss'
import { renderData, getLocation } from './dom'

renderData()

const unitsElement = document.querySelector('#units')
unitsElement.addEventListener('change', renderData)

const searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('submit', function (event) {
  event.preventDefault()
  renderData()
})
