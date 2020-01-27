import Cell from './Cell'
// tslint:disable: no-inner-html
import { IBoardItem } from './RawBoard'
import { bombIcon } from '../assets/icons'
import { colors } from '../assets/colors'
import { createElementWithClass } from '../helpers/createElementWithClass'

class Game {
  bombsCount: number = 0

  setCell = (tr: HTMLElement) => ({value, id}: IBoardItem) => {
    const td = createElementWithClass('td', 'table-data')
    const {cell} = new Cell()
    const isBomb = value === '0'
    td.innerHTML = isBomb ? bombIcon : value ? String(value) : ''
    if (isBomb) {
      this.bombsCount++
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