import Game from './Game'
import GameObserver from './GameObserver'
import { TBoard } from '../types'
import axios from 'axios'
import boardDetails from './BoardDetails'
import { createElementWithClass } from '../helpers/createElementWithClass'
import { destroyBoard } from '../helpers/destroyBoard'

export class Settings {
	game = new Game()
	isGameLoaded = false
	root

	constructor(root: Element) {
		this.root = root
	}

	setGame = async () => {
		const startButton = document.querySelector('.start')!
		startButton.innerHTML = 'restart'

		if (this.isGameLoaded) destroyBoard(this.root)
		this.isGameLoaded = true

		this.displayLoader(true)

		const response = await this.fetchBoard()

		this.displayLoader(false)
		this.appendBoardToDOM(response?.data.board)
		this.startObserver()
	}

	fetchBoard = async () => {
		const { rows, cols, level } = boardDetails
		return await axios
			.get<{ board: TBoard }>('http://localhost:5000/api', { params: { rows, cols, level } })
			.catch(this.handleError)
	}

	appendBoardToDOM = (board?: TBoard) => {
		boardDetails.resetBombs()
		const table = document.createElement('table')!
		board?.forEach(this.game.createGame(table))
		this.root.appendChild(table)
	}

	startObserver = () => {
		const { gameObserver } = new GameObserver(document.querySelector('.bomb-counter')!)
		gameObserver.observe(this.root, {
			childList: true,
			subtree: true,
		})
	}

	handleError = () => {
		this.displayLoader(false)
		let error = document.querySelector('.error')
		if (error) this.root.removeChild(error)
		error = createElementWithClass('p', 'error')
		error.innerHTML = 'API error. Please refresh and try again'
		this.root.appendChild(error)
	}

	displayLoader = (show: boolean) => {
		if (show) {
			const loader = createElementWithClass('p', 'loader')
			loader.innerHTML = 'Loading...'
			this.root.appendChild(loader)
		} else {
			const loader = document.querySelector('.loader')!
			this.root.removeChild(loader)
		}
	}
}
