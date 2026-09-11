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
    this.#key = this.upChord(this.#key);

    // transpose key on display
    const key_e = document.getElementById("key");
    key_e.textContent = this.#key;

    // transpose all chords
    this.#chords.forEach((element) => {
      console.log(element);
    });
  }

  transposeDown() {
    // transpose key
    this.#key = this.downChord(this.#key);

    // transpose key on display
    const key_e = document.getElementById("key");
    key_e.textContent = this.#key;

    // transpose all chords
    this.#chords.forEach((element) => {
      const chord = element.textContent;
      console.log(chord);
      // this.downChord(chord);
    });
  }

  upChord(chord) {
    return "G#m";
  }

  downChord(chord) {
    return "F#m";
  }
}
