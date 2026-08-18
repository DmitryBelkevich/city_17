import Song from '../../../models/Song.js';

// ---
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const obj = {
  id: urlParams.get('id'),
  user: urlParams.get('user'),
  voice: urlParams.get('voice')
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
