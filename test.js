const test = require("ava")
const playerCreated = require(".")

test("main", async t => {
	t.is((await playerCreated("Richienb")).getTime(), 1546732800000)
	await t.throwsAsync(() => playerCreated("123lmfao4"))
})
