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
    var note;
    var post;
    
    if (chord[1] == "#" || chord[1] == "b") {
      note = chord.slice(0, 2);
      post = chord.slice(2);
    } else {
      note = chord.slice(0, 1);
      post = chord.slice(1);
    }
    
    if (note == "G")
      note = "G#";

    if (note == "G#")
      return "A";

    if (note == "A")
      return "A#";

    if (note == "A#")
      chord = "B";

    if (note == "B")
      chord = "C";

    if (note == "C")
      chord = "C#";

    if (note == "C#")
      chord = "D";

    if (note == "D")
      chord = "D#";

    if (note == "D#")
      chord = "E";

    if (note == "E")
      chord = "F";

    if (note == "F")
      chord = "F#";

    if (note == "F#")
      chord = "G";

    chord = note + post;
    
    return chord;
  }

  downChord(chord) {
    return "";
  }
}
