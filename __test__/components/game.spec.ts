import Game from '../../src/components/Game'
import { bombIcon } from '../../src/assets/icons'
import { createElementWithClass } from '../../src/helpers/createElementWithClass'
import { encodeIcon } from '../../src/helpers/encodeIcon'

const { createGame, setCell } = new Game()

test('it should set cell with bomb', () => {
	const tr = createElementWithClass('tr', 'table-row')
	const item = { value: 0, id: [2, 3] }
	setCell(tr)(item)
	const child = tr.firstElementChild!
	expect(child).toHaveClass('table-data')
	expect(child).toHaveAttribute('id', '2,3')
	expect(encodeIcon(child.textContent!)).toEqual(bombIcon)
	expect(child.firstElementChild).toHaveClass('cell')
})

test('it should set cell without bomb', () => {
	const tr = createElementWithClass('tr', 'table-row')
	const item = { value: 2, id: [3, 3] }
	setCell(tr)(item)
	const child = tr.firstElementChild!
	expect(child).toHaveClass('table-data')
	expect(child).toHaveAttribute('id', '3,3')
	expect(child.textContent).toEqual('2')
	expect(child.firstElementChild).toHaveClass('cell')
})

test('it should create game', () => {
	const table = document.createElement('table')
	const item = [{ value: 2, id: [3, 3] }]
	createGame(table)(item)
	const child = table.firstElementChild
	expect(child).toHaveClass('table-row')
	const result = `<tr class="table-row"><td class="table-data" id="3,3" style="color: rgb(0, 130, 0);">2<button class="cell"></button></td></tr>`
	expect(table.innerHTML).toEqual(result)
})
