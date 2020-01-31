import ArmedBoard from './ArmedBoard'
import Game from './Game'
import GameObserver from './GameObserver'
import RawBoard from './RawBoard'
import { destroyBoard } from '../helpers/destroyBoard'

class Settings {
  boardSize: number = 10
  level: number = 0.3

  handleSetSize = (e) => {
    const {value} = e.target
    this.boardSize = +value
    this.initializeNewGame(false)()
  }

  handleSetLevel = (e) => {
    const {value} = e.target
    this.level = +value
    this.initializeNewGame(false)()
  }

  initializeNewGame = (isInitialLoad: boolean) => () => {
    const root = document.querySelector('.root')
    const table = document.createElement('table')
    if (!isInitialLoad) {
      destroyBoard(root)
    }
    const {rawBoard} = new RawBoard(this.boardSize, this.level)
    const {armedBoard} = new ArmedBoard(rawBoard)
    const game = new Game()

    armedBoard.forEach(game.createGame(table))

    root.appendChild(table)

    const {gameObserver} = new GameObserver(game.bombsCount)

    const observerOptions = {
      childList: true,
      subtree: true
    }

    gameObserver.observe(root, observerOptions)
  }
}

export default Settings