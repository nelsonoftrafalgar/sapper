import { getProximityCells } from './getProximityCells'

export const clearWholeSector = (parent: HTMLElement) => {
	const [row, col] = parent.id.split(',')
	const proximityCells = getProximityCells(+row, +col).map((el) => el.join(','))

	proximityCells.forEach((cell) => {
		const proximityParent = document.querySelector(`td[id='${cell}']`) as HTMLTableDataCellElement
		if (proximityParent) {
			const { textContent, dataset } = proximityParent

			if (textContent) dataset.checked = 'true'

			if (!textContent && !dataset.checked) {
				dataset.checked = 'true'
				clearWholeSector(proximityParent)
			}
			const proximityChild = proximityParent.firstElementChild
			if (proximityChild) proximityParent.removeChild(proximityChild)
		}
	})
}
