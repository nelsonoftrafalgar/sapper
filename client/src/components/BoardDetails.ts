class BoardDetails {
	rows = 10
	cols = 10
	bombs = 0
	level = 0.9

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
}

const boardDetails = new BoardDetails()

export default boardDetails
