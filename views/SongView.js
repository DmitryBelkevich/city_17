export default class SongView {
  #song;

  set song(song) {
    this.#song = song;
  }

  create() {
    this.setDisplay();
  }
  
  setDisplay() {
    console.log("set Display");
    // const display = document.getElementById("display");
    // display.innerHTML = this.#song.getVoice(0) + " " + this.#song.getInstrument(0);
  }
}
