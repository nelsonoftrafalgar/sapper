import {bombIcon, failIcon, flagIcon, questionIcon, winIcon} from '../src/assets/icons'

// tslint:disable: no-inner-html
import {encodeIcon} from '../src/helpers/encodeIcon'

const testData = [bombIcon, failIcon, flagIcon, winIcon, questionIcon]

test('encoding HTML symbols works', () => {
  testData.forEach((icon) => {
    const element = document.createElement('p')
    element.innerHTML = icon
    expect(encodeIcon(element.innerHTML)).toEqual(icon)
  })
})