export default class Transposer {
  #key;
  #chords = [];

  constructor() {
    const lines = document.querySelectorAll('div.chords');
    
    lines.forEach(line => {
    const line_arr = line.querySelectorAll('div');
      this.#chords.push(...line_arr);
    });
  }
  
  set key(key) {
    this.#key = key;
  }
  
  transposeUp() {
    // transpose key
    this.#key = upChord("Gm");

    // transpose key on display
    const key_e = document.getElementById("key");
    key_e.textContent = this.#key;

    // transpose all chords
    this.#chords.forEach(() => {
      
    });
  }

  transposeDown() {
    // transpose key
    this.#key = upChord("Gm");

    // transpose key on display
    const key_e = document.getElementById("key");
    key_e.textContent = this.#key;

    // transpose all chords
    this.#chords.forEach(() => {
      
    });
  }

  upChord(chord) {
    return "G#m";
  }

  downChord(chord) {
    return "F#m";
  }
}
