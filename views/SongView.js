export default class SongView {
  #song;

  set song(song) {
    this.#song = song;
  }
  
  setDisplay(song) {
    const display = document.getElementById("display");
    display.innerHTML = song.getVoice(0) + " " + song.getInstrument(0);
  }
}
