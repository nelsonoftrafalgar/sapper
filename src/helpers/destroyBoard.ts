import gameStatus from '../components/GameStatus'

export const destroyBoard = (app: Element) => {
	const result = document.querySelector('.game-result')!
	const timer = document.querySelector('.time-counter')!
	clearInterval(gameStatus.interval)
	gameStatus.isInitialClick = true
	result.textContent = ''
	timer.textContent = '0'
	app.removeChild(app.lastElementChild!)
}
