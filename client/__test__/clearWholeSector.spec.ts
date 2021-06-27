/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'

import { beforeEach, expect, test } from '@jest/globals'

import { clearWholeSector } from '../src/helpers/clearWholeSector'
import { createElementWithClass } from '../src/helpers/createElementWithClass'

interface IDataItem {
	id: string
	value: string
}

const rows1 = [
	[
		{ id: '1,1', value: '1' },
		{ id: '1,2', value: '1' },
		{ id: '1,3', value: '1' },
	],
	[
		{ id: '2,1', value: '1' },
		{ id: '2,2', value: '' },
		{ id: '2,3', value: '1' },
	],
	[
		{ id: '3,1', value: '1' },
		{ id: '3,2', value: '1' },
		{ id: '3,3', value: '' },
	],
]

const rows2 = [
	[
		{ id: '1,1', value: '1' },
		{ id: '1,2', value: '1' },
		{ id: '1,3', value: '1' },
		{ id: '1,4', value: '1' },
	],
	[
		{ id: '2,1', value: '1' },
		{ id: '2,2', value: '' },
		{ id: '2,3', value: '1' },
		{ id: '2,4', value: '1' },
	],
	[
		{ id: '3,1', value: '1' },
		{ id: '3,2', value: '1' },
		{ id: '3,3', value: '' },
		{ id: '3,4', value: '1' },
	],
	[
		{ id: '4,1', value: '1' },
		{ id: '4,2', value: '1' },
		{ id: '4,3', value: '' },
		{ id: '4,4', value: '1' },
	],
	[
		{ id: '5,1', value: '1' },
		{ id: '5,2', value: '1' },
		{ id: '5,3', value: '1' },
		{ id: '5,4', value: '1' },
	],
]

const mockDOM = (testData: IDataItem[][]) => {
	const table = document.createElement('table')

	testData.forEach((row) => {
		const tr = document.createElement('tr')
		row.forEach((item) => {
			const td = document.createElement('td')
			td.setAttribute('id', item.id)
			td.textContent = item.value
			const button = createElementWithClass('button', 'cell')
			td.appendChild(button)
			tr.appendChild(td)
		})
		table.appendChild(tr)
	})
	document.body.appendChild(table)
}

beforeEach(() => {
	document.body.innerHTML = ''
})

test('it should clear single sector', () => {
	mockDOM(rows1)
	const parent = document.getElementById('2,2')!
	parent.removeChild(parent.firstElementChild!)
	parent.dataset.checked = 'true'
	clearWholeSector(parent)
	const cells = document.querySelectorAll('.cell')
	expect(cells.length).toEqual(0)
})

test('it should clear adjacent sectors', () => {
	mockDOM(rows2)
	const parent = document.getElementById('2,2')!
	parent.removeChild(parent.firstElementChild!)
	parent.dataset.checked = 'true'
	clearWholeSector(parent)
	const cells = document.querySelectorAll('.cell')
	expect(cells.length).toEqual(3)
	expect(document.getElementById('4,1')?.firstElementChild).not.toBeNull()
	expect(document.getElementById('5,1')?.firstElementChild).not.toBeNull()
	expect(document.getElementById('1,4')?.firstElementChild).not.toBeNull()
})
