import './style.css'

import ArmedBoard from './components/ArmedBoard'
import Game from './components/Game'
import GameObserver from './components/GameObserver'
import RawBoard from './components/RawBoard'

const table = document.createElement('table')
const root = document.querySelector('.root')

const BOARD_SIZE = 15
const LEVEL = 0.4 // 0.4 - easy, 0.3 - normal, 0.2 - hard

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
