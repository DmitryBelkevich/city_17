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

  async setText() {
    // Fetch the external HTML file
    const data = await loadData(this.#song.text);
    console.log(data);
  }

  async loadData(path) {
    try {
      // 1. Wait for the server headers and response status
      const response = await fetch(path);
      
      // 2. Check if the HTTP status code is successful (200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // 3. Wait for the full body data to download and parse as text
      const data = await response.text();
      
      return data;
    } catch (error) {
      // 4. Handle network errors or parsing issues
      console.error('Fetch failed:', error);
    }
  }
}
