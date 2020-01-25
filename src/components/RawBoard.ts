// tslint:disable: insecure-random
class RawBoard {
  rawBoard: string[][]

  constructor(size: number) {
    this.rawBoard = this.getRawBoard(size, size)
  }

  private getRawBoard = (rows: number, columns: number) => {
    return Array.from({length: rows}, () => {
      return Array.from({length: columns}, () => {
        return String(Math.round(Math.random()))
      })
    })
  }
}

export default RawBoard