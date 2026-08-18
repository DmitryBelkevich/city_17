import Song from '../../../models/Song.js';
import Musician from '../../../models/Musician.js';

import SongDao from '../../../dao/SongDao.js';

// ---
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

// ---
const musician = new Musician();

musician.voice = urlParams.get('voice');
musician.instrument = urlParams.get('instrument');
// ---
// DAO
const songDao = new SongDao();

const song = await songDao.getById(id);

console.log(song);

// set content

const display = document.getElementById("display");
display.innerHTML = musician.instrument;

const content = document.getElementById("content");
content.innerHTML = song.band + " - " + song.title;
