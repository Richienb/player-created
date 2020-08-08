# player-created [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/player-created/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/player-created)

Find when a Minecraft player was created.

[![NPM Badge](https://nodei.co/npm/player-created.png)](https://npmjs.com/package/player-created)

## Install

```sh
npm install player-created
```

## Usage

```js
const playerCreated = require("player-created");

playerCreated("Richienb");
//=> 2019-01-06T00:00:00.000Z
```

## API

### playerCreated(username)

#### username

Type: `string`

The username to get the creation time for.
