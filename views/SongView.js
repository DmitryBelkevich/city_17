export default class SongView {
  #song;

  set song(song) {
    this.#song = song;
  }

  create() {
    this.setPageTitle();
    
    this.setDisplay();
    this.setTitle();
    this.setText();
  }

  setPageTitle() {
    const element = document.title;
    element.innerHTML = this.#song.band + " " + this.#song.title;
  }
  
  setDisplay() {
    const element = document.getElementById("display");
    element.innerHTML = this.#song.getVoice(0) + " " + this.#song.getInstrument(0);
  }

  setTitle() {
    const element = document.getElementById("title");

    const element_h1 = document.createElement('h1');
    element_h1.textContent = this.#song.title;
    element.append(element_h1);
    
    const element_h2 = document.createElement('h2');
    element_h2.textContent = this.#song.band;
    element.append(element_h2);
  }

  async setText() {
    // Fetch the external HTML file
    const data = await this.loadData(this.#song.text);
    
    const element = document.getElementById("text");
    element.innerHTML = data;
  }

  async loadData(path) {
    try {
      // 1. Wait for the server headers and response status
      const response = await fetch("https://dmitrybelkevich.github.io/city_17/storage/" + path);
      
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
