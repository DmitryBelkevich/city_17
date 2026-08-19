export default class SongView {
  #song;

  set song(song) {
    this.#song = song;
  }

  create() {
    this.setDisplay();
    this.setTitle();
    this.setText();
  }
  
  setDisplay() {
    const display = document.getElementById("display");
    display.innerHTML = this.#song.getVoice(0) + " " + this.#song.getInstrument(0);
  }

  setTitle() {
    const title = document.getElementById("title");

    const header1 = document.createElement('h1');
    header1.textContent = this.#song.title;
    title.append(header1);
    
    const header2 = document.createElement('h2');
    header2.textContent = this.#song.band;
    title.append(header2);
  }

  setText() {
    console.log("set text");
  }
}
