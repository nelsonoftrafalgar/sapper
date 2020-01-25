// tslint:disable: no-inner-html
import './style.css'

import ArmedBoard from './components/ArmedBoard'
import RawBoard from './components/RawBoard'

const table = document.createElement('table')
const root = document.querySelector('.root')

const BOARD_SIZE = 8

const {rawBoard} = new RawBoard(BOARD_SIZE)
const {armedBoard} = new ArmedBoard(rawBoard)

armedBoard.forEach((row) => {
  const tr = document.createElement('tr')
  tr.classList.add('table-row')
  row.forEach((col) => {
    const td = document.createElement('td')
    td.classList.add('table-data')
    td.innerHTML = String(col)
    tr.appendChild(td)
  })
  table.appendChild(tr)
})

root.appendChild(table)