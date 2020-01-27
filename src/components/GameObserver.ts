import { handleBombsCount } from '../helpers/handleBombsCount'

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
    for (const mutation of mutations) {
      // @ts-ignore
      const {type, target: {localName}, addedNodes, removedNodes} = mutation
      if (type === 'childList') {
        if (localName === 'button') {
          this.bombsToGo = handleBombsCount(addedNodes, this.bombsToGo, this.bombCounter, (count) => count - 1)
          this.bombsToGo = handleBombsCount(removedNodes, this.bombsToGo, this.bombCounter, (count) => count + 1)
        }
      }
    }
  }
}

export default GameObserver