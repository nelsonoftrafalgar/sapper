import GameObserver from '../../src/components/GameObserver'
import { flagIcon } from '../../src/assets/icons'

const nodeWithFlag = document.createElement('p')
nodeWithFlag.innerHTML = flagIcon

const bombCounter = document.createElement('p')

const mockIncrementMutations = [
	{
		type: 'childList',
		target: document.createElement('button'),
		addedNodes: [],
		removedNodes: [nodeWithFlag],
	},
]

const mockDecrementMutations = [
	{
		type: 'childList',
		target: document.createElement('button'),
		addedNodes: [nodeWithFlag],
		removedNodes: [],
	},
]

test('it should observe and update bomb count in DOM', () => {
	const gameObserver = new GameObserver(bombCounter)
	const spyOnHandleBombsCount = jest.spyOn(gameObserver, 'handleBombsCount')
	gameObserver.mutationCallback(mockIncrementMutations as any)
	expect(gameObserver.bombsToGo).toEqual(1)
	expect(gameObserver.bombCounter.textContent).toEqual('1')
	gameObserver.mutationCallback(mockDecrementMutations as any)
	expect(gameObserver.bombsToGo).toEqual(0)
	expect(gameObserver.bombCounter.textContent).toEqual('0')
	expect(spyOnHandleBombsCount).toHaveBeenCalledTimes(4)
})
