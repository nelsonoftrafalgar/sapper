import { rest } from 'msw'

export const mockSuccessResponse = {
	board: [
		[
			{ id: [1, 1], value: 1 },
			{ id: [1, 2], value: 1 },
			{ id: [1, 3], value: 1 },
			{ id: [1, 4], value: 9 },
			{ id: [1, 5], value: 9 },
			{ id: [1, 6], value: 9 },
			{ id: [1, 7], value: 9 },
			{ id: [1, 8], value: 9 },
			{ id: [1, 9], value: 9 },
			{ id: [1, 10], value: 9 },
		],
		[
			{ id: [2, 1], value: 1 },
			{ id: [2, 2], value: 0 },
			{ id: [2, 3], value: 1 },
			{ id: [2, 4], value: 9 },
			{ id: [2, 5], value: 9 },
			{ id: [2, 6], value: 9 },
			{ id: [2, 7], value: 9 },
			{ id: [2, 8], value: 9 },
			{ id: [2, 9], value: 9 },
			{ id: [2, 10], value: 9 },
		],
		[
			{ id: [3, 1], value: 1 },
			{ id: [3, 2], value: 1 },
			{ id: [3, 3], value: 1 },
			{ id: [3, 4], value: 9 },
			{ id: [3, 5], value: 9 },
			{ id: [3, 6], value: 9 },
			{ id: [3, 7], value: 9 },
			{ id: [3, 8], value: 9 },
			{ id: [3, 9], value: 9 },
			{ id: [3, 10], value: 9 },
		],
		[
			{ id: [4, 1], value: 1 },
			{ id: [4, 2], value: 1 },
			{ id: [4, 3], value: 1 },
			{ id: [4, 4], value: 1 },
			{ id: [4, 5], value: 1 },
			{ id: [4, 6], value: 9 },
			{ id: [4, 7], value: 9 },
			{ id: [4, 8], value: 1 },
			{ id: [4, 9], value: 1 },
			{ id: [4, 10], value: 1 },
		],
		[
			{ id: [5, 1], value: 0 },
			{ id: [5, 2], value: 1 },
			{ id: [5, 3], value: 1 },
			{ id: [5, 4], value: 0 },
			{ id: [5, 5], value: 1 },
			{ id: [5, 6], value: 9 },
			{ id: [5, 7], value: 1 },
			{ id: [5, 8], value: 2 },
			{ id: [5, 9], value: 0 },
			{ id: [5, 10], value: 1 },
		],
		[
			{ id: [6, 1], value: 1 },
			{ id: [6, 2], value: 1 },
			{ id: [6, 3], value: 1 },
			{ id: [6, 4], value: 1 },
			{ id: [6, 5], value: 1 },
			{ id: [6, 6], value: 9 },
			{ id: [6, 7], value: 1 },
			{ id: [6, 8], value: 0 },
			{ id: [6, 9], value: 2 },
			{ id: [6, 10], value: 1 },
		],
		[
			{ id: [7, 1], value: 9 },
			{ id: [7, 2], value: 9 },
			{ id: [7, 3], value: 9 },
			{ id: [7, 4], value: 9 },
			{ id: [7, 5], value: 9 },
			{ id: [7, 6], value: 9 },
			{ id: [7, 7], value: 1 },
			{ id: [7, 8], value: 1 },
			{ id: [7, 9], value: 1 },
			{ id: [7, 10], value: 9 },
		],
		[
			{ id: [8, 1], value: 9 },
			{ id: [8, 2], value: 9 },
			{ id: [8, 3], value: 9 },
			{ id: [8, 4], value: 9 },
			{ id: [8, 5], value: 9 },
			{ id: [8, 6], value: 9 },
			{ id: [8, 7], value: 9 },
			{ id: [8, 8], value: 9 },
			{ id: [8, 9], value: 9 },
			{ id: [8, 10], value: 9 },
		],
		[
			{ id: [9, 1], value: 9 },
			{ id: [9, 2], value: 9 },
			{ id: [9, 3], value: 9 },
			{ id: [9, 4], value: 9 },
			{ id: [9, 5], value: 9 },
			{ id: [9, 6], value: 9 },
			{ id: [9, 7], value: 1 },
			{ id: [9, 8], value: 1 },
			{ id: [9, 9], value: 1 },
			{ id: [9, 10], value: 9 },
		],
		[
			{ id: [10, 1], value: 9 },
			{ id: [10, 2], value: 9 },
			{ id: [10, 3], value: 9 },
			{ id: [10, 4], value: 9 },
			{ id: [10, 5], value: 9 },
			{ id: [10, 6], value: 9 },
			{ id: [10, 7], value: 1 },
			{ id: [10, 8], value: 0 },
			{ id: [10, 9], value: 1 },
			{ id: [10, 10], value: 9 },
		],
	],
}

export const handlers = [
	rest.get('/api', (_, res, ctx) => {
		return res(ctx.json(mockSuccessResponse))
	}),

	rest.get('/error', (_, res, ctx) => {
		return res(ctx.status(500))
	}),
]