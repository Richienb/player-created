const test = require("ava")
const inRange = require("in-range")
const playerCreated = require(".")

test("main", async t => {
	t.is((await playerCreated("Richienb")).getTime(), 1546732800000)
	t.true(inRange((await playerCreated("123lmfao4")).getTime(), {
		start: 1263146640000,
		end: 1263146650000
	})) // Legacy account
})
