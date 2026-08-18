import Song from '../../../models/Song.js';
import Musician from '../../../models/Musician.js';

// ---
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

// ---
const musician = new Musician();

musician.voice = urlParams.get('voice');
musician.instrument = urlParams.get('instrument');
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
display.innerHTML = musician.instrument;

const content = document.getElementById("content");
content.innerHTML = song.band + " " + song.title;
