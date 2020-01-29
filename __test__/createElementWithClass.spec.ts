import {createElementWithClass} from '../src/helpers/createElementWithClass'

const testData = [
  {
    name: 'div',
    className: 'test'
  },
  {
    name: 'p',
    className: 'test1'
  },
  {
    name: 'span',
    className: 'test2'
  },
  {
    name: 'h1',
    className: 'test3'
  },
  {
    name: 'a',
    className: 'test4'
  }
]

test('creating element with class works', () => {
  testData.forEach((test) => {
    const {name, className} = test
    const element = createElementWithClass(name, className)
    expect(element).toHaveClass(className)
    expect(element.localName).toEqual(name)
  })
})