import { flagIcon } from '../src/assets/icons'
// tslint:disable: no-inner-html
import {handleBombsCount} from '../src/helpers/handleBombsCount'

const mockDOM = (withFlag: boolean) => {
  const div = document.createElement('div')
  const p = document.createElement('p')
  if (withFlag) {
    p.innerHTML = flagIcon
  }
  div.appendChild(p)

  return div
}

const mockIncrement = (count: number) => count + 1
const mockDecrement = (count: number) => count - 1

const mockCounter = document.createElement('p')
mockCounter.textContent = '4'

test('bombs count sholud not change when flag icon is not present', () => {
  const dom = mockDOM(false)
  const nodes = dom.querySelectorAll('p')
  const currentCount = mockCounter.textContent
  const result1 = handleBombsCount(nodes, +currentCount, mockCounter, mockIncrement)
  const result2 = handleBombsCount(nodes, +currentCount, mockCounter, mockDecrement)

  expect(mockCounter.textContent).toEqual('4')
  expect(result1).toEqual(4)
  expect(result2).toEqual(4)
})

test('incrementing bombs count works', () => {
  const dom = mockDOM(true)
  const nodes = dom.querySelectorAll('p')
  const currentCount = mockCounter.textContent
  const result = handleBombsCount(nodes, +currentCount, mockCounter, mockIncrement)

  expect(mockCounter.textContent).toEqual('5')
  expect(result).toEqual(5)
})

test('decrementing bombs count works', () => {
  const dom = mockDOM(true)
  const nodes = dom.querySelectorAll('p')
  const currentCount = mockCounter.textContent
  const result = handleBombsCount(nodes, +currentCount, mockCounter, mockDecrement)

  expect(mockCounter.textContent).toEqual('4')
  expect(result).toEqual(4)
})