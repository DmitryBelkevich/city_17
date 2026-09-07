export default class ListView {
  constructor() {
    // reset css
    this.loadCSS("../api/views/css/reset.css");
    
    this.body = document.body;
  }

  addGenre() {
    
  }

  addSong(song) {
    const song_e = document.createElement("div");
    song_e.textContent = song.band + " - " + song.title;

    this.body.append(song_e);
  }
}
