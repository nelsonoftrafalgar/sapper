// tslint:disable: insecure-random
export interface IBoardItem {
  id: number[]
  value: string | number
}

class RawBoard {
  rawBoard: IBoardItem[][]

  constructor(size: number, level: number) {
    this.rawBoard = this.getRawBoard(size, size, level)
  }

  private getRawBoard = (rows: number, columns: number, level: number) => {
    return Array.from({length: rows}, (_, rowId) => {
      return Array.from({length: columns}, (_, colId) => {
        return {id: [rowId + 1, colId + 1], value: String(Math.round(Math.random() + level))}
      })
    })
  }
}

export default RawBoard