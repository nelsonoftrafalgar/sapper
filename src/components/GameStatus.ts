import { bombIcon, failIcon, winIcon } from '../assets/icons'

// tslint:disable: no-inner-html
import { encodeIcon } from '../helpers/encodeIcon'

class GameStatus {
  interval: NodeJS.Timeout
  isInitialClick: boolean = true
  status = document.querySelector('.game-result') as HTMLParagraphElement

  setStatus = (icon: string) => {
    clearInterval(this.interval)
    this.status.innerHTML = icon
  }

  winGame = () => {
    const parentsWithBombs = []
    const cells = document.querySelectorAll('.cell')
    cells.forEach((cell) => {
      parentsWithBombs.push(cell.parentElement)
    })

    const onlyBombs = parentsWithBombs.every((parent) => encodeIcon(parent.innerHTML).includes(bombIcon))
    if (onlyBombs) {
      this.setStatus(winIcon)
    }
  }

  startGame = () => {
    this.winGame()
    if (this.isInitialClick) {
      const timer = document.querySelector('.time-counter')
      let time = 0
      this.interval = setInterval(() => {
        time++
        timer.innerHTML = String(time)
      }, 1000)
    }
    this.isInitialClick = false
  }

  handleGameOver = (icon: string) => {
    if (encodeIcon(icon) === bombIcon) {
      this.setStatus(failIcon)
    }
  }
}

const gameStatus = new GameStatus()

export default gameStatus