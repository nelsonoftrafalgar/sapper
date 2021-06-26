import './style.css'

import { Settings } from './components/Settings'
import boardDetails from './components/BoardDetails'

const start = document.querySelector('.start')!
const rowsSelect = document.querySelector('.rows')!
const colsSelect = document.querySelector('.cols')!
const levelSelect = document.querySelector('.level')!

document.addEventListener('DOMContentLoaded', () => {
	const { setGame } = new Settings()
	const { handleSetCols, handleSetLevel, handleSetRows } = boardDetails

	rowsSelect.addEventListener('change', handleSetRows)
	colsSelect.addEventListener('change', handleSetCols)
	levelSelect.addEventListener('change', handleSetLevel)
	start.addEventListener('click', setGame)
})
