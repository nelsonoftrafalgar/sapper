import { flagIcon, questionIcon } from '../src/assets/icons'

import { encodeIcon } from '../src/helpers/encodeIcon'
import {handleRightClick} from '../src/helpers/handleClick'

const td = document.createElement('td')
const button = document.createElement('button')
const event = document.createEvent('HTMLEvents')
button.addEventListener('contextmenu', handleRightClick())
td.appendChild(button)
event.initEvent('contextmenu', true, false)

test('right click changes icon', () => {
  button.dispatchEvent(event)
  expect(encodeIcon(button.textContent)).toEqual(flagIcon)

  button.dispatchEvent(event)
  expect(encodeIcon(button.textContent)).toEqual(questionIcon)

  button.dispatchEvent(event)
  expect(encodeIcon(button.textContent)).toEqual('')
})
