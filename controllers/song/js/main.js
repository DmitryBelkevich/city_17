import Song from '../../../models/Song.js';
import SongDao from '../../../dao/SongDao.js';
import SongView from '../../../views/SongView.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

async function main() {
  try {
    
    const songDao = new SongDao();
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
