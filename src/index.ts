import './style.css'

import Settings from './components/Settings'

const restart = document.querySelector('.restart')
const sizeSelect = document.querySelector('.size')
const levelSelect = document.querySelector('.level')

const {handleSetLevel, handleSetSize, initializeNewGame} = new Settings()

sizeSelect.addEventListener('change', handleSetSize)
levelSelect.addEventListener('change', handleSetLevel)
restart.addEventListener('click', initializeNewGame(false))
document.addEventListener('DOMContentLoaded', initializeNewGame(true))