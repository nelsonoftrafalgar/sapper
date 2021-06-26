import { bombIcon, failIcon, winIcon } from '../assets/icons'

import boardDetails from './BoardDetails'
import { encodeIcon } from '../helpers/encodeIcon'

class GameStatus {
	interval = 0
	isInitialClick = true
	status = document.querySelector('.game-result') as HTMLParagraphElement

	setStatus = (icon: string) => {
		clearInterval(this.interval)
		this.status.innerHTML = icon
	}

	hasBomb = (content: string) => encodeIcon(content).includes(bombIcon)

	disableCellEvents = () => {
		const cells = document.querySelectorAll('.cell')
		cells.forEach((cell) => {
			const newCell = cell.cloneNode(true)
			cell.parentNode?.replaceChild(newCell, cell)
		})
	}

	checkIsWin = () => {
		const totalCells = boardDetails.rows * boardDetails.cols
		const checkedCells = document.querySelectorAll(`td[data-checked=true]`).length
		const isWin = totalCells - checkedCells === boardDetails.bombs

		if (isWin) {
			this.setStatus(winIcon)
			this.disableCellEvents()
		}
	}

	startGame = () => {
		this.handleTimer()
		this.checkIsWin()
	}

	handleTimer = () => {
		if (this.isInitialClick) {
			const timer = document.querySelector('.time-counter')!
			let time = 0
			this.interval = setInterval(() => {
				time++
				timer.innerHTML = String(time)
			}, 1000)
		}
		this.isInitialClick = false
	}

	blowUpAllBombs = () => {
		const bombs = document.querySelectorAll('.table-data')
		bombs.forEach((bomb) => {
			if (this.hasBomb(bomb.innerHTML)) {
				if (bomb.firstElementChild) {
					bomb.removeChild(bomb.firstElementChild)
				}
			}
		})
	}

	handleGameOver = () => {
		this.disableCellEvents()
		this.setStatus(failIcon)
		this.blowUpAllBombs()
	}
}

const gameStatus = new GameStatus()

export default gameStatus
