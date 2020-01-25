class ArmedBoard {
  armedBoard: (string | number)[][]

  constructor(rawBoard: string[][]) {
    this.armedBoard = rawBoard.map((row, rowIdx) => row.map((col, colIdx) => {
      const proximityCells = this.getProximityCells(rowIdx, colIdx)
      return col === '1' ? proximityCells.map(this.validateCell(rawBoard)).reduce(this.getMines, []).length : col
    }))
  }

  private getProximityCells = (r: number, c: number) => {
    return [
      [r - 1, c],
      [r - 1, c + 1],
      [r, c + 1],
      [r + 1, c + 1],
      [r + 1, c],
      [r + 1, c - 1],
      [r, c - 1],
      [r - 1, c - 1]
    ]
  }

  private validateCell = (gameBoard: string[][]) => (cell: number[]) => {
    const exists = !cell.some((boardIndex) => boardIndex > (gameBoard.length - 1) || boardIndex < 0)
    return exists ? gameBoard[cell[0]][cell[1]] : 0
  }

  private getMines = (ac: string[], val: string) => val && val !== '1' ? [...ac, val] : ac
}

export default ArmedBoard