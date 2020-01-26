import { clearWholeSector } from './clearWholeSector'

// tslint:disable: no-inner-html

const flagIcon = '&#9873;'
const questionIcon = '&#63;'

export const handleRightClick = () => {
  let clickCache = 0

  return function(e: MouseEvent)  {
    e.preventDefault()
    clickCache += 1

    if (clickCache === 3) {
      clickCache = 0
    }

    switch (clickCache) {
      case 0:
        this.innerHTML = ''
        break
      case 1:
        this.innerHTML = flagIcon
        break
      case 2:
        this.innerHTML = questionIcon
        break
    }
  }
}

export const handleLeftClick = function() {
  const parent: HTMLTableDataCellElement = this.parentElement
  parent.removeChild(this)
  parent.dataset.checked = 'true'
  if (!parent.innerHTML) {
    clearWholeSector(parent)
  }
}