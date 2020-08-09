"use strict"

const minecraftPlayer = require("minecraft-player")
const mem = require("mem")

module.exports = mem(async username => {
	if (typeof username !== "string") {
		throw new TypeError(`Expected a string, got ${typeof username}`)
	}

	const { createdAt } = await minecraftPlayer(username)

	if (createdAt === null) {
		throw new Error("This account was created before 01/10/2010 @ 6:03pm (UTC), had 2 or more usernames assigned to it or is unmigrated.")
	}

	if (createdAt === undefined) {
		throw new Error("This account has had its username changed at least once")
	}

	return new Date(createdAt)
})
