export default class Transposer {
  #key;
  
  set key(key) {
    this.#key = key;
  }
  
  transposeUp() {
    console.log("transpose UP from " + this.#key + " to " + " new key");
    
    const chords_lines = document.querySelectorAll('div.chords');
    
    chords_lines.forEach(chords_line => {
      const chords_line_arr = chords_line.querySelectorAll('div');
      chords_line_arr.forEach((chord_div) => {
        chord_div.innerHTML += "+";
      });
    });
  }

  transposeDown() {
    console.log("transpose Down from " + this.#key + " to " + " new key");
    
    const chords_lines = document.querySelectorAll('div.chords');
    
    chords_lines.forEach(chords_line => {
      const chords_line_arr = chords_line.querySelectorAll('div');
      chords_line_arr.forEach((chord_div) => {
        chord_div.innerHTML -= "-";
      });
    });
  }
}
