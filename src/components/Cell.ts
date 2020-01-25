import { handleLeftClick, handleRightClick } from '../helpers/handleClick'

class Cell {
  cell: HTMLButtonElement

  constructor() {
    const cell = document.createElement('button')
    cell.classList.add('cell')
    cell.addEventListener('click', handleLeftClick)
    cell.addEventListener('contextmenu', handleRightClick())

    this.cell = cell
  }
}

export default Cell