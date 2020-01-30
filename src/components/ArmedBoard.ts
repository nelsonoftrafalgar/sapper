import { IBoardItem } from './RawBoard'
import { getProximityCells } from '../helpers/getProximityCells'

class ArmedBoard {
  armedBoard: IBoardItem[][]

  constructor(rawBoard: IBoardItem[][]) {
    this.armedBoard = rawBoard.map((row, rowIdx) => row.map((col, colIdx) => {
      const proximityCells = getProximityCells(rowIdx, colIdx)
      const bombs = proximityCells.map(this.validateCell(rawBoard)).reduce(this.getMines, []).length
      return col.value === '1' ? {id: col.id, value: bombs} : col
    }))
  }

  validateCell = (gameBoard: IBoardItem[][]) => (cell: number[]) => {
    const exists = !cell.some((boardIndex) => boardIndex > (gameBoard.length - 1) || boardIndex < 0)
    return exists ? gameBoard[cell[0]][cell[1]] : ''
  }

  getMines = (ac: string[], val: IBoardItem) => val && val.value !== '1' ? [...ac, val] : ac
}

export default ArmedBoard