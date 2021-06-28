import { rest } from 'msw'

export const mockSuccessResponse = {
	board: [
		[
			{ id: [0, 0], value: 0 },
			{ id: [0, 1], value: 3 },
		],
		[
			{ id: [1, 0], value: 0 },
			{ id: [1, 1], value: 0 },
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
