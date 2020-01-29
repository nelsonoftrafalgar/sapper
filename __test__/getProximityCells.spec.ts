import {getProximityCells} from '../src/helpers/getProximityCells'

const testData = [
  {
    row: 2,
    col: 2,
    result: [[1, 2], [1, 3], [2, 3], [3, 3], [3, 2], [3, 1], [2, 1], [1, 1]]
  },
  {
    row: 0,
    col: 0,
    result: [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]
  },
  {
    row: 32,
    col: 27,
    result: [[31, 27], [31, 28], [32, 28], [33, 28], [33, 27], [33, 26], [32, 26], [31, 26]]
  },
  {
    row: 3,
    col: 8,
    result: [[2, 8], [2, 9], [3, 9], [4, 9], [4, 8], [4, 7], [3, 7], [2, 7]]
  },
  {
    row: 12,
    col: 8,
    result: [[11, 8], [11, 9], [12, 9], [13, 9], [13, 8], [13, 7], [12, 7], [11, 7]]
  }
]

test('calculating proximity cells works', () => {
  testData.forEach((test) => {
    const {row, col, result} = test
    const cells = getProximityCells(row, col)
    expect(cells).toStrictEqual(result)
    expect(cells).toHaveLength(8)
  })
})