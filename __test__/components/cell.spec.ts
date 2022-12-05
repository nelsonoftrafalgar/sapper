import { fireEvent, waitFor } from '@testing-library/dom'

import { Settings } from '../../src/components/Settings'
import gameStatus from '../../src/components/GameStatus'
import { mockDOM } from '../../src/mocks/mockDOM'

beforeEach(() => mockDOM())

test('it should update DOM on left click', async () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')

	settings.setGame()
	await waitFor(() => expect(document.querySelector('table')).toBeInTheDocument())
	const cell0 = document.querySelectorAll('.cell')![0]
	const parent = cell0.parentElement!
	fireEvent.click(cell0)
	expect(parent.dataset.checked).toEqual('true')

	expect(document.querySelectorAll('.cell')).toHaveLength(99)
	const cell7 = document.querySelectorAll('.cell')![7]
	fireEvent.click(cell7)
	expect(document.querySelectorAll('.cell')).toHaveLength(15)

	gameStatus.status = document.querySelector('.game-result')!
	const cell2 = document.querySelectorAll('.cell')![2]
	fireEvent.click(cell2)
	expect(gameStatus.status.innerHTML).toEqual('☠')
})

test('it should update DOM on right click', async () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')

	settings.setGame()
	await waitFor(() => expect(document.querySelector('table')).toBeInTheDocument())
	const cell = document.querySelector('.cell')!

	fireEvent.contextMenu(cell)
	expect(cell.innerHTML).toEqual('⚑')
	fireEvent.contextMenu(cell)
	expect(cell.innerHTML).toEqual('?')
	fireEvent.contextMenu(cell)
	expect(cell.innerHTML).toEqual('')
	fireEvent.contextMenu(cell)
	expect(cell.innerHTML).toEqual('⚑')
})
