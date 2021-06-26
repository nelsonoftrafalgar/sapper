import './style.css'

import { Settings } from './components/Settings'

const start = document.querySelector('.start')!
const rowsSelect = document.querySelector('.rows')!
const colsSelect = document.querySelector('.cols')!
const levelSelect = document.querySelector('.level')!

document.addEventListener('DOMContentLoaded', () => {
	const { handleSetCols, handleSetLevel, handleSetRows, handleSetGame } = new Settings()

	rowsSelect.addEventListener('change', handleSetRows)
	colsSelect.addEventListener('change', handleSetCols)
	levelSelect.addEventListener('change', handleSetLevel)
	start.addEventListener('click', handleSetGame)
})
