import Cell from './Cell'
import { IBoardItem } from '../types'
import boardDetails from './BoardDetails'
import { bombIcon } from '../assets/icons'
import { colors } from '../assets/colors'
import { createElementWithClass } from '../helpers/createElementWithClass'

class Game {
	setCell =
		(tr: HTMLElement) =>
		({ value, id }: IBoardItem) => {
			const td = createElementWithClass('td', 'table-data')
			const { cell } = new Cell(createElementWithClass('button', 'cell'))
			const isBomb = value === 0
			td.innerHTML = isBomb ? bombIcon : value < 9 ? String(value) : ''
			if (isBomb) {
				boardDetails.incrementBombs()
			}
			td.setAttribute('id', String(id))
			td.appendChild(cell)
			if (String(value)) {
				td.style.color = colors[String(value)]
			}
			tr.appendChild(td)
		}

	createGame = (table: HTMLTableElement) => (row: IBoardItem[]) => {
		const tr = createElementWithClass('tr', 'table-row')
		row.forEach(this.setCell(tr))
		table.appendChild(tr)
	}
}

export default Game
