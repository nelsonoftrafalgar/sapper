import { flagIcon, questionIcon } from '../assets/icons'

import { clearWholeSector } from '../helpers/clearWholeSector'
import gameStatus from '../components/GameStatus'

class Cell {
	cell: HTMLElement
	clickCache = 0

	constructor(cell: HTMLElement) {
		cell.addEventListener('click', this.handleLeftClick)
		cell.addEventListener('contextmenu', this.handleRightClick)

		this.cell = cell
	}

	handleLeftClick = () => {
		const parent = this.cell.parentElement!
		const { startGame, hasBomb, handleGameOver } = gameStatus
		parent.removeChild(this.cell)
		if (hasBomb(parent.innerHTML)) {
			parent.style.background = 'red'
			handleGameOver()
		} else {
			parent.dataset.checked = 'true'
		}
		if (!parent.innerHTML) {
			clearWholeSector(parent)
		}
		startGame()
	}

	handleRightClick = (e: Event) => {
		e.preventDefault()
		this.clickCache += 1

		if (this.clickCache === 3) {
			this.clickCache = 0
		}

		switch (this.clickCache) {
			case 0:
				this.cell.innerHTML = ''
				break
			case 1:
				this.cell.innerHTML = flagIcon
				break
			case 2:
				this.cell.innerHTML = questionIcon
				break
		}
	}
}

export default Cell
