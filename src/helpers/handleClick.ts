// tslint:disable: no-inner-html

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
        this.innerHTML = '&#9873;'
        break
      case 2:
        this.innerHTML = '&#63;'
        break
    }
  }
}

export const handleLeftClick = function() {
  const parent = this.parentElement
  parent.removeChild(this)
}