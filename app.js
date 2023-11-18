const {VideoGame} = require("./VideoGames.js");
const Store = require("./Store.js");
const {Media} = require("./Media.js")

//make a store
let store = new Store();

//make two videogames
let videoGame1 = new VideoGame("Runescape", "PC");
let videoGame2 = new VideoGame("Hunt Showdown", "PC", 3);

//make one media
let someMedia = new Media("Random album")

//add videogames to store
store.videogames.push(videoGame1, videoGame2);

//print all the stuff
// console.log(store.videogames);
store.videogames.forEach(videoGame => {
    console.log(videoGame.getVideoGame());
})
console.log(store.otherMedia);
// console.log(videoGame2.getVideoGame());
console.log(Media.count)