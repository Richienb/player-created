"use strict"

const ky = require("ky-universal")
const pDoWhilst = require("p-do-whilst")
const numberDifference = require("num-diff")
const minecraftPlayer = require("minecraft-player")
const mem = require("mem")

async function checkUsernameAtTime(username, timestamp) {
	const { status } = await ky(username, {
		prefixUrl: "https://api.mojang.com/users/profiles/minecraft/",
		searchParams: {
			at: timestamp
		}
	})

	return status === 200
}

const startTime = 1263146630
const endTime = Math.floor(Date.now() / 1000)

module.exports = mem(async username => {
	if (typeof username !== "string") {
		throw new TypeError(`Expected a string, got ${typeof username}`)
	}

	const { createdAt } = await minecraftPlayer(username)

	if (createdAt !== null) {
		return new Date(createdAt)
	}

	let previousGuess
	let currentGuess = startTime + Math.floor(numberDifference(endTime, startTime) / 2)

	await pDoWhilst(
		async () => {
			const beforeGuess = previousGuess
			previousGuess = currentGuess
			if (await checkUsernameAtTime(username, currentGuess)) {
				currentGuess -= Math.floor(numberDifference(currentGuess, beforeGuess || startTime) / 2)
			} else {
				currentGuess += Math.floor(numberDifference(currentGuess, beforeGuess || endTime) / 2)
			}
		},
		() => previousGuess !== currentGuess
	)

	return new Date(currentGuess * 1000)
})
