import './style.css'

import ArmedBoard from './components/ArmedBoard'
import Game from './components/Game'
import GameObserver from './components/GameObserver'
import RawBoard from './components/RawBoard'
import { destroyBoard } from './helpers/destroyBoard'

const restart = document.querySelector('.restart')

const BOARD_SIZE = 10 // 20 - large, 15 - medium, 10 - small
const LEVEL = 0.3 // 0.4 - easy, 0.3 - normal, 0.2 - hard

const initializeNewGame = (isInitialLoad: boolean) => () => {
  const root = document.querySelector('.root')
  const table = document.createElement('table')
  if (!isInitialLoad) {
    destroyBoard(root)
  }
  const {rawBoard} = new RawBoard(BOARD_SIZE, LEVEL)
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

restart.addEventListener('click', initializeNewGame(false))

document.addEventListener('DOMContentLoaded', initializeNewGame(true))