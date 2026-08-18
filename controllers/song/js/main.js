import Song from '../../../models/Song.js';

import SongDao from '../../../dao/SongDao.js';


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// DAO
const songDao = new SongDao();

function main() {
  try {
    const song = songDao.getById(1);

    console.log(song);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

main();

// set content

// const display = document.getElementById("display");
// display.innerHTML = song.getVoice(0) + " " + song.getInstrument(0);

// const content = document.getElementById("content");
// content.innerHTML = song.band + " - " + song.title;
