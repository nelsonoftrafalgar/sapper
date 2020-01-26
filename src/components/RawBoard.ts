// tslint:disable: insecure-random
export interface IBoardItem {
  id: number[]
  value: string | number
}

class RawBoard {
  rawBoard: IBoardItem[][]

  constructor(size: number) {
    this.rawBoard = this.getRawBoard(size, size)
  }

  private getRawBoard = (rows: number, columns: number) => {
    return Array.from({length: rows}, (_, rowId) => {
      return Array.from({length: columns}, (_, colId) => {
        return {id: [rowId + 1, colId + 1], value: String(Math.round(Math.random()))}
      })
    })
  }
}

export default RawBoard