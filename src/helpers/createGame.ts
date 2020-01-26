import Cell from '../components/Cell'
import { IBoardItem } from '../components/RawBoard'
import { bombIcon } from '../assets/icons'
import { colors } from '../assets/colors'
// tslint:disable: no-inner-html
import { createElementWithClass } from './createElementWithClass'

const setCell = (tr: HTMLElement) => ({value, id}: IBoardItem) => {
  const td = createElementWithClass('td', 'table-data')
  const {cell} = new Cell()
  const isBomb = value === '0'
  td.innerHTML = isBomb ? bombIcon : value ? String(value) : ''
  td.setAttribute('id', String(id))
  td.appendChild(cell)
  if (String(value)) {
    td.style.color = colors[String(value)]
  }
  tr.appendChild(td)
}

export const createGame = (table: HTMLTableElement) => (row: IBoardItem[]) => {
  const tr = createElementWithClass('tr', 'table-row')
  row.forEach(setCell(tr))
  table.appendChild(tr)
}