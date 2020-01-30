import ArmedBoard from '../src/components/ArmedBoard'

const testBoard = [
  [
    {id: [1, 1], value: '1'},
    {id: [1, 2], value: '1'},
    {id: [1, 3], value: '0'}
  ],
  [
    {id: [2, 1], value: '1'},
    {id: [2, 2], value: '0'},
    {id: [2, 3], value: '1'}
  ],
  [
    {id: [3, 1], value: '1'},
    {id: [3, 2], value: '0'},
    {id: [3, 3], value: '1'}
  ]
]

const {validateCell, getMines} = new ArmedBoard(testBoard)

const result1 = ['']
const result2 = [{ id: [ 2, 1 ], value: '1' }]
const result3 = [{ id: [ 3, 2 ], value: '0' }]

test('cell validation works', () => {
  expect([[-1, 0]].map(validateCell(testBoard))).toStrictEqual(result1)
  expect([[1, 0]].map(validateCell(testBoard))).toStrictEqual(result2)
  expect([[2, 1]].map(validateCell(testBoard))).toStrictEqual(result3)
  expect([[3, 4]].map(validateCell(testBoard))).toStrictEqual(result1)
})

test('getMine works', () => {
  expect((result1 as any).reduce(getMines, [])).toHaveLength(0)
  expect(result2.reduce(getMines, [])).toHaveLength(0)
  expect(result3.reduce(getMines, [])).toHaveLength(1)
})