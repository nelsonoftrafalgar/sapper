import { getProximityCells } from './getProximityCells'

export const clearWholeSector = (parent: HTMLTableDataCellElement) => {
  const [row, col] = parent.id.split(',')
  const proximityCells = getProximityCells(+row, +col).map((el) => el.join(','))
  proximityCells.forEach((cell) => {
    const proximityParent = document.querySelector(`td[id='${cell}']`) as HTMLTableDataCellElement
    if (proximityParent) {
      if (!proximityParent.textContent && !proximityParent.dataset.checked) {
        proximityParent.dataset.checked = 'true'
        clearWholeSector(proximityParent)
      }
      const proximityChild = proximityParent.firstElementChild
      if (proximityChild) {
        proximityParent.removeChild(proximityChild)
      }
    }
  })
}
