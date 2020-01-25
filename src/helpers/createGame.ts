import Cell from '../components/Cell'
// tslint:disable: no-inner-html
import { createElementWithClass } from './createElementWithClass'

const setCell = (tr: HTMLElement) => (col: string) => {
  const td = createElementWithClass('td', 'table-data')
  const {cell} = new Cell()
  td.innerHTML = col === '0' ? '&#9762;' : String(col)
  td.appendChild(cell)
  tr.appendChild(td)
}

export const createGame = (table: HTMLTableElement) => (row: (string | number)[]) => {
  const tr = createElementWithClass('tr', 'table-row')
  row.forEach(setCell(tr))
  table.appendChild(tr)
}