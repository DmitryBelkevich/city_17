import Song from '../../../models/Song.js';

// ---
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// get id
const id = urlParams.get('id');

// get user
const user = urlParams.get('user');

console.log(id);
console.log(user);
// ---

const song = new Song();

song.id = 1;
song.band = "band1";
song.title = "title1";
song.text = "text1";
song.score = "score1";
song.playback = "playback1";

window.song = song;
