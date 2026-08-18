import Song from '../../../models/Song.js';

import SongDao from '../../../dao/SongDao.js';


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// DAO
const songDao = new SongDao();

// view
class SongView {
  #song;

  set song(song) {
    this.#song = song;
  }
  
  setDisplay(song) {
    const display = document.getElementById("display");
    display.innerHTML = song.getVoice(0) + " " + song.getInstrument(0);
  }
}

async function main() {
  try {
    const song = await songDao.getById(id);

    // --- set content ---
    const songView = new SongView();
    songView.song = song;

    // display
    songView.setDisplay(song);

    // title
    const title = document.getElementById("title");

    const header1 = document.createElement('h1');
    header1.textContent = song.title;
    title.append(header1);
    
    const header2 = document.createElement('h2');
    header2.textContent = song.band;
    title.append(header2);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

main();
