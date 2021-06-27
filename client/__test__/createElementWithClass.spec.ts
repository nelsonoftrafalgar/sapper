/**
 * @jest-environment jsdom
 */

import { expect, test } from '@jest/globals'

import { createElementWithClass } from '../src/helpers/createElementWithClass'

const testData = [
	{
		name: 'div',
		className: 'test',
	},
	{
		name: 'p',
		className: 'test1',
	},
	{
		name: 'span',
		className: 'test2',
	},
	{
		name: 'h1',
		className: 'test3',
	},
	{
		name: 'a',
		className: 'test4',
	},
]

test('it creates an element with class', () => {
	testData.forEach((test) => {
		const { name, className } = test
		const element = createElementWithClass(name, className)
		expect(element.classList.contains(className)).toBeTruthy()
		expect(element.localName).toEqual(name)
	})
})
