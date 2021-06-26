import { encodeIcon } from '../helpers/encodeIcon'
import { flagIcon } from '../assets/icons'

type UpdateCount = () => number

class GameObserver {
	gameObserver: MutationObserver
	bombsToGo: number = 0
	bombCounter = document.querySelector('.bomb-counter') as HTMLParagraphElement

	constructor(bombsToGo: number) {
		this.bombCounter.innerText = String(bombsToGo)
		this.bombsToGo = bombsToGo
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
