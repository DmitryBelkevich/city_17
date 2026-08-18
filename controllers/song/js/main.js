import Song from '../../../models/Song.js';

import SongDao from '../../../dao/SongDao.js';


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// DAO
const songDao = new SongDao();

const song = await songDao.getById(id);

console.log("--- " + song.id + " ---");

// set content

const display = document.getElementById("display");
display.innerHTML = song.getVoice(0) + " " + song.getInstrument(0);

const content = document.getElementById("content");
content.innerHTML = song.band + " - " + song.title;
