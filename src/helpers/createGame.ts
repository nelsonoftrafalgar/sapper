import Cell from '../components/Cell'
import { IBoardItem } from '../components/RawBoard'
// tslint:disable: no-inner-html
import { createElementWithClass } from './createElementWithClass'

const bombIcon = '&#9762;'

const setCell = (tr: HTMLElement) => ({value, id}: IBoardItem) => {
  const td = createElementWithClass('td', 'table-data')
  const {cell} = new Cell()
  td.innerHTML = value === '0' ? bombIcon : value ? String(value) : ''
  td.setAttribute('id', String(id))
  td.appendChild(cell)
  tr.appendChild(td)
}

export const createGame = (table: HTMLTableElement) => (row: IBoardItem[]) => {
  const tr = createElementWithClass('tr', 'table-row')
  row.forEach(setCell(tr))
  table.appendChild(tr)
}