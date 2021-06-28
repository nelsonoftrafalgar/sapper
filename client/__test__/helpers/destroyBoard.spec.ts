import { destroyBoard } from '../../src/helpers/destroyBoard'
import gameStatus from '../../src/components/GameStatus'

test('it removes board from DOM and resets timer', () => {
	document.body.innerHTML = `
    <p class='game-result'>test result</p>
    <p class='time-counter'>test time counter</p>
    <P class='last-element'></P>
  `

	destroyBoard(document.body)
	const result = document.querySelector('.game-result')!
	const timer = document.querySelector('.time-counter')!
	const lastELement = document.querySelector('.last-element')
	expect(result.textContent).toEqual('')
	expect(timer.textContent).toEqual('0')
	expect(gameStatus.isInitialClick).toBeTruthy()
	expect(gameStatus.interval).toEqual(0)
	expect(lastELement).toBeNull()
})
