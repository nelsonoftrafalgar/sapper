import Cell from '../src/components/Cell'

const {cell} = new Cell()

test('creating single cell works', () => {
  expect(cell).toHaveClass('cell')
  expect(cell.localName).toEqual('button')
})