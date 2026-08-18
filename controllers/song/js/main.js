import Song from '../../../models/Song.js';

// ---
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const obj = {
  id: urlParams.get('id'),
  voice: urlParams.get('voice'),
  instrument: urlParams.get('instrument')
}

console.log(obj);
// ---

const song = new Song();

song.id = 1;
song.band = "band1";
song.title = "title1";
song.text = "text1";
song.score = "score1";
song.playback = "playback1";

window.song = song;

const display = document.getElementById("display");
content.innerHTML = obj.instrument;

const content = document.getElementById("content");
content.innerHTML = "Hello World";
