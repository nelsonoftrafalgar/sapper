import boardDetails from '../../src/components/BoardDetails'
import { fireEvent } from '@testing-library/dom'
import { mockDOM } from '../../src/mocks/mockDOM'

beforeEach(() => mockDOM())

test('it should set rows', () => {
	const rowsSelect = document.querySelector('.rows')!
	rowsSelect.addEventListener('change', boardDetails.handleSetRows)
	fireEvent.change(rowsSelect, { target: { value: '60' } })
	expect(boardDetails.rows).toEqual(60)
})

test('it should set cols', () => {
	const colsSelect = document.querySelector('.cols')!
	colsSelect.addEventListener('change', boardDetails.handleSetCols)
	fireEvent.change(colsSelect, { target: { value: '60' } })
	expect(boardDetails.cols).toEqual(60)
})

test('it should set level', () => {
	const levelSelect = document.querySelector('.level')!
	levelSelect.addEventListener('change', boardDetails.handleSetLevel)
	fireEvent.change(levelSelect, { target: { value: '0.2' } })
	expect(boardDetails.level).toEqual(0.2)
})

test('it should increment bombs', () => {
	expect(boardDetails.bombs).toEqual(0)
	boardDetails.incrementBombs()
	boardDetails.incrementBombs()
	expect(boardDetails.bombs).toEqual(2)
})

test('it should reset bombs', () => {
	expect(boardDetails.bombs).toEqual(2)
	boardDetails.resetBombs()
	expect(boardDetails.bombs).toEqual(0)
})

test('it should return bombs', () => {
	expect(boardDetails.getBombCount()).toEqual(0)
	boardDetails.incrementBombs()
	boardDetails.incrementBombs()
	expect(boardDetails.getBombCount()).toEqual(2)
})
