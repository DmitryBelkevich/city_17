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
      const chord = element.textContent;
      element.textContent = this.upChord(chord)
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
      element.textContent = this.downChord(chord);
    });
  }

  upChord(chord) {
    console.log(chord);
    
    if (chord == "Gm")
      chord = "G#m";

    if (chord == "G#m")
      chord = "Am";

    if (chord == "Am")
      chord = "A#m";

    if (chord == "A#m")
      chord = "Bm";

    if (chord == "Bm")
      chord = "Cm";

    if (chord == "Cm")
      chord = "C#m";

    if (chord == "C#m")
      chord = "Dm";

    if (chord == "Dm")
      chord = "D#m";

    if (chord == "D#m")
      chord = "Em";

    if (chord == "Em")
      chord = "Fm";

    if (chord == "Fm")
      chord = "F#m";

    if (chord == "F#m")
      chord = "Gm";
    
    return chord;
  }

  downChord(chord) {
    return "";
  }
}
