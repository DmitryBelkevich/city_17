export default class SongView {
  #song;

  set song(song) {
    this.#song = song;
  }

  create() {
    setDisplay();
  }
  
  setDisplay() {
    const display = document.getElementById("display");;
    display.innerHTML = this.#song.getVoice(0) + " " + this.#song.getInstrument(0);
  }
}
