export default class Transposer {
  #key;
  #chords = [];

  constructor() {
    const chords_lines = document.querySelectorAll('div.chords');
    
    chords_lines.forEach(chords_line => {
    const chords_line_arr = chords_line.querySelectorAll('div');
      this.#chords.push(...chords_line_arr);
    });

    console.log(this.#chords);
  }
  
  set key(key) {
    this.#key = key;
  }
  
  transposeUp() {
    // transpose key
    this.#key = "G#m";

    // transpose key on display
    const key_e = document.getElementById("key");
    key_e.textContent = this.#key;

    // transpose all chords
    const chords_lines = document.querySelectorAll('div.chords');
    
    chords_lines.forEach(chords_line => {
      const chords_line_arr = chords_line.querySelectorAll('div');
      chords_line_arr.forEach((chord_div) => {
        const chord_old = chord_div.innerHTML;
        const chord_new = "G#m";
        chord_div.innerHTML = chord_new;
      });
    });
  }

  transposeDown() {
    // transpose key
    this.#key = "F#m";

    // transpose key on display
    const key_e = document.getElementById("key");
    key_e.textContent = this.#key;

    // transpose all chords
    const chords_lines = document.querySelectorAll('div.chords');
    
    chords_lines.forEach(chords_line => {
      const chords_line_arr = chords_line.querySelectorAll('div');
      chords_line_arr.forEach((chord_div) => {
        const chord_old = chord_div.innerHTML;
        const chord_new = "F#m";
        chord_div.innerHTML = chord_new;
      });
    });
  }
}
