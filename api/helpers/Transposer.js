export default class Transposer {
  transposeUp() {
    const chords_lines = document.querySelectorAll('div.chords');
    
    chords_lines.forEach(chords_line => {
      const chords_line_arr = chords_line.querySelectorAll('div');
      chords_line_arr.forEach((chord_div) => {
        chord_div.innerHTML += "+";
      });
    });
  }

  transposeDown() {
    console.log("Transpose down");
  }
}
