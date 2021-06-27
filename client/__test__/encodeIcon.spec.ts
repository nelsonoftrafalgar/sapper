/**
 * @jest-environment jsdom
 */

import { bombIcon, failIcon, flagIcon, questionIcon, winIcon } from '../src/assets/icons'
import { expect, test } from '@jest/globals'

import { encodeIcon } from '../src/helpers/encodeIcon'

const testData = [bombIcon, failIcon, flagIcon, winIcon, questionIcon]

test('it should encode HTML symbol to string', () => {
	testData.forEach((icon) => {
		const element = document.createElement('p')
		element.innerHTML = icon
		expect(encodeIcon(element.innerHTML)).toEqual(icon)
	})
})
