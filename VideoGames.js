const {Media} = require("./Media")

class VideoGame extends Media{
    constructor(newName, platform, players=1) {
        super(newName);
        // this.name = newName
        // this.players = players || 1; //set default to 1 if there are no players
        this.players = players;
        this.platform = platform;
    }

    getVideoGame() {
        return `${this.name} is a video game for ${this.players} player(s) and can be played on ${this.platform}`
    }
}

let someVideoGame = new VideoGame("Runescape", "PC");
// console.log(someVideoGame.name);
// console.log(`Platform is: ${someVideoGame.platform} ` + `Number of players: ${someVideoGame.players}`)
console.log(someVideoGame.getVideoGame());
// console.log(someVideoGame.getMediaName());
// console.log(someVideoGame.version());
console.log(Media.count);