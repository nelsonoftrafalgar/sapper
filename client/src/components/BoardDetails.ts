class BoardDetails {
	rows
	cols
	bombs
	level

	constructor(rows: number, cols: number, bombs: number, level: number) {
		this.rows = rows
		this.cols = cols
		this.bombs = bombs
		this.level = level
	}

	handleSetRows = (e: Event) => {
		const { value } = e.target as HTMLSelectElement
		this.rows = +value
	}

	handleSetCols = (e: Event) => {
		const { value } = e.target as HTMLSelectElement
		this.cols = +value
	}

	handleSetLevel = (e: Event) => {
		const { value } = e.target as HTMLSelectElement
		this.level = +value
	}

	incrementBombs = () => this.bombs++
	resetBombs = () => (this.bombs = 0)
	getBombCount = () => this.bombs
}

const boardDetails = new BoardDetails(10, 10, 0, 0.5)

export default boardDetails
