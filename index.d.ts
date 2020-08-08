/**
Find when a Minecraft player was created.
@param username The username to get the creation time for.
@example
```
const playerCreated = require("player-created");

playerCreated("Richienb");
//=> 2019-01-06T00:00:00.000Z
```
*/
declare function playerCreated(username: string): Promise<Date>

export = playerCreated
