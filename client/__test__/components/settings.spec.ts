import { Settings } from '../../src/components/Settings'
import boardDetails from '../../src/components/BoardDetails'
import { mockDOM } from '../../src/mocks/mockDOM'
import { mockSuccessResponse } from '../../src/mocks/handlers'
import { waitFor } from '@testing-library/dom'

beforeEach(() => mockDOM())

test('it should set game', async () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')

	settings.setGame()

	const startButton = document.querySelector('.start')!
	expect(startButton.innerHTML).toEqual('restart')
	expect(settings.isGameLoaded).toBeTruthy()
	await waitFor(() => expect(document.querySelector('table')).toBeInTheDocument())
	expect(root.querySelector('.table-row')).toBeInTheDocument()
	expect(root.querySelector('.table-data')).toBeInTheDocument()
	expect(root.querySelector('.loader')).not.toBeInTheDocument()
	expect(root.querySelector('.bomb-counter')?.innerHTML).toEqual('3')
})

test('it should fetch and return data', async () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')

	const response = await settings.fetchBoard()
	expect(response?.data).toMatchObject(mockSuccessResponse)
})

test('it should handle api errors', async () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/error')

	const response = await settings.fetchBoard()
	expect(response).toBeUndefined()
	expect(document.querySelector('.error')).toBeInTheDocument()
})

test('it should convert data to board and append it to the DOM', () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')

	settings.appendBoardToDOM(mockSuccessResponse.board)
	expect(document.querySelector('table')).toBeInTheDocument()
})

test('it should start observer and set bombs count', () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')

	boardDetails.resetBombs()
	boardDetails.incrementBombs()
	boardDetails.incrementBombs()
	boardDetails.incrementBombs()

	settings.startObserver()
	expect(document.querySelector('.bomb-counter')?.innerHTML).toEqual('3')
})

test('it should remove loader and append error to the DOM', () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')

	settings.handleError()
	expect(document.querySelector('.error')).toBeInTheDocument()
	expect(document.querySelector('.loader')).not.toBeInTheDocument()
})

test('it should handle loader', () => {
	const root = document.querySelector('.root')!
	const settings = new Settings(root, '/api')

	settings.displayLoader(true)
	expect(document.querySelector('.loader')).toBeInTheDocument()
	settings.displayLoader(false)
	expect(document.querySelector('.loader')).not.toBeInTheDocument()
})
