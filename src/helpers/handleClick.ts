import { flagIcon, questionIcon } from '../assets/icons'

import { clearWholeSector } from './clearWholeSector'
import gameStatus from '../components/GameStatus'

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
  const {startGame, hasBomb, handleGameOver} = gameStatus
  parent.removeChild(this)
  startGame()
  parent.dataset.checked = 'true'
  if (!parent.innerHTML) {
    clearWholeSector(parent)
  }
  if (hasBomb(parent.innerHTML)) {
    parent.style.background = 'red'
    handleGameOver()
  }
}