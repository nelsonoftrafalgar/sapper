import boardDetails from './BoardDetails'
import { encodeIcon } from '../helpers/encodeIcon'
import { flagIcon } from '../assets/icons'

type UpdateCount = () => number

class GameObserver {
	gameObserver
	bombsToGo = boardDetails.getBombCount()
	bombCounter

	constructor(bombCounter: HTMLParagraphElement) {
		this.bombCounter = bombCounter
		this.bombCounter.innerHTML = String(this.bombsToGo)
		this.gameObserver = new MutationObserver(this.mutationCallback)
	}

	mutationCallback = (mutations: MutationRecord[]) => {
		mutations.forEach(({ type, target, addedNodes, removedNodes }) => {
			if (type === 'childList' && target.nodeName === 'BUTTON') {
				this.handleBombsCount(addedNodes, () => (this.bombsToGo -= 1))
				this.handleBombsCount(removedNodes, () => (this.bombsToGo += 1))
			}
		})
	}

	handleBombsCount = (nodes: NodeList, updateCount: UpdateCount) => {
		nodes.forEach((node) => {
			if (encodeIcon(node.textContent!) === flagIcon) {
				updateCount()
				this.bombCounter.textContent = String(this.bombsToGo)
			}
		})
	}
}

export default GameObserver
