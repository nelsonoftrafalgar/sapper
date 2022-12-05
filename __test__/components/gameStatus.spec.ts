import { bombIcon, flagIcon, winIcon } from '../../src/assets/icons'

import { GameStatus } from '../../src/components/GameStatus'
import { Settings } from '../../src/components/Settings'
import boardDetails from '../../src/components/BoardDetails'
import { mockDOM } from '../../src/mocks/mockDOM'
import { waitFor } from '@testing-library/dom'

beforeEach(() => mockDOM())

test('it should set game status', () => {
	const gameStatus = new GameStatus(0, document.querySelector('.game-result')!)
	gameStatus.setStatus('mockIcon')
	expect(gameStatus.interval).toEqual(0)
	expect(gameStatus.status.innerHTML).toEqual('mockIcon')
})

test('it should handle bomb check', () => {
	const gameStatus = new GameStatus(0, document.querySelector('.game-result')!)
	const isBomb = document.createElement('p')
	const isNotBomb = document.createElement('p')
	isNotBomb.innerHTML = flagIcon
	isBomb.innerHTML = bombIcon
	expect(gameStatus.hasBomb(isNotBomb.innerHTML)).toBeFalsy()
	expect(gameStatus.hasBomb(isBomb.innerHTML)).toBeTruthy()
})

test('it should remove event listeners from all cells', async () => {
	const gameStatus = new GameStatus(0, document.querySelector('.game-result')!)
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')
	settings.setGame()
	await waitFor(() => expect(document.querySelectorAll('.cell')).toHaveLength(100))
	const cells = document.querySelectorAll('.cell')
	const spies: jest.SpyInstance[] = []
	cells.forEach((cell) => {
		spies.push(jest.spyOn(cell.parentElement!, 'replaceChild'))
	})

	gameStatus.disableCellEvents()
	spies.forEach((spy) => expect(spy).toHaveBeenCalled())
})

test('it should check game status', async () => {
	const gameStatus = new GameStatus(0, document.querySelector('.game-result')!)
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')
	boardDetails.rows = 2
	boardDetails.cols = 2
	settings.setGame()
	await waitFor(() => expect(document.querySelector('table')).toBeInTheDocument())
	gameStatus.checkIsWin()
	const spy = jest.spyOn(gameStatus, 'setStatus')
	expect(spy).not.toHaveBeenCalled()
	boardDetails.bombs = 4
	gameStatus.checkIsWin()
	expect(spy).toHaveBeenCalledWith(winIcon)
})

test('it should start game', () => {
	const gameStatus = new GameStatus(0, document.querySelector('.game-result')!)
	const spyOnHandleTimer = jest.spyOn(gameStatus, 'handleTimer')
	const spyOnCheckIsWin = jest.spyOn(gameStatus, 'checkIsWin')
	gameStatus.startGame()
	expect(spyOnCheckIsWin).toHaveBeenCalled()
	expect(spyOnHandleTimer).toHaveBeenCalled()
})

test('it should start interval', () => {
	const gameStatus = new GameStatus(0, document.querySelector('.game-result')!)
	gameStatus.handleTimer()
	expect(gameStatus.interval).not.toEqual(0)
})

test('it should detonate all bombs', async () => {
	const gameStatus = new GameStatus(0, document.querySelector('.game-result')!)
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')
	settings.setGame()
	await waitFor(() => expect(document.querySelectorAll('.cell')).toHaveLength(100))
	gameStatus.blowUpAllBombs()
	expect(document.querySelectorAll('.cell')).toHaveLength(94)
})

test('it should end game', () => {
	const gameStatus = new GameStatus(0, document.querySelector('.game-result')!)
	const spyOnDisableCellEvents = jest.spyOn(gameStatus, 'disableCellEvents')
	const spyOnSetStatus = jest.spyOn(gameStatus, 'setStatus')
	const spyOnBlowUpAllBombs = jest.spyOn(gameStatus, 'blowUpAllBombs')
	gameStatus.handleGameOver()
	expect(spyOnDisableCellEvents).toHaveBeenCalled()
	expect(spyOnSetStatus).toHaveBeenCalled()
	expect(spyOnBlowUpAllBombs).toHaveBeenCalled()
})
