import RawBoard from '../src/components/RawBoard'

const BOARD_SIZE_1 = 20
const BOARD_SIZE_2 = 15
const BOARD_SIZE_3 = 10
const LEVEL = 0.3

test('generating 20x20 raw board works', () => {
  const {rawBoard} = new RawBoard(BOARD_SIZE_1, LEVEL)
  expect(rawBoard.length).toEqual(BOARD_SIZE_1)
  rawBoard.forEach((row) => {
    expect(row.length).toEqual(BOARD_SIZE_1)
  })
})

test('generating 15x15 raw board works', () => {
  const {rawBoard} = new RawBoard(BOARD_SIZE_2, LEVEL)
  expect(rawBoard.length).toEqual(BOARD_SIZE_2)
  rawBoard.forEach((row) => {
    expect(row.length).toEqual(BOARD_SIZE_2)
  })
})

test('generating 10x10 raw board works', () => {
  const {rawBoard} = new RawBoard(BOARD_SIZE_3, LEVEL)
  expect(rawBoard.length).toEqual(BOARD_SIZE_3)
  rawBoard.forEach((row) => {
    expect(row.length).toEqual(BOARD_SIZE_3)
  })
})