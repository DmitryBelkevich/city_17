export default class SongView {
  #song;
  
  set song(song) {
    this.#song = song;
  }
  
  create() {
    this.setPageTitle();
    
    this.setDisplay();
    this.setTitle();
    this.setTabs();
    this.setTuning();
    this.setText();
  }
  
  setPageTitle() {
    document.title = this.#song.band + " - " + this.#song.title;
  }
  
  setTabs() {
    document.getElementById("tab_text").addEventListener("click", () => {
      console.log("open text tab");
    });
    
    document.getElementById("tab_score").addEventListener("click", () => {
      if (!this.#song.score)
        return;
      
      window.open(this.#song.score, "_blank");
    });
    
    document.getElementById("tab_playback").addEventListener("click", () => {
      if (!this.#song.playback)
        return;
      
      window.open(this.#song.playback, "_blank");
    });
  }

  setTuning() {
    const element = document.getElementById("tuning");

    var tuning;
    var tuningTitle = "";
    
    if (!this.#song.tuning) {
      tuning = ["E", "A", "D", "G", "B", "E"];
      tuningTitle = "Standard E";

      element.style.color = "green";
    } else {
      tuning = this.#song.tuning;

      // standards

      if (arr[0] == "D#" && arr[1] == "G#" && arr[2] == "C#")//-1
        tuningTitle = "Standard D#";

      if (arr[0] == "D" && arr[1] == "G" && arr[2] == "C")//-2
        tuningTitle = "Standard D";

      if (arr[0] == "C#" && arr[1] == "F#" && arr[2] == "B")//-3
        tuningTitle = "Standard C#";

      // drops

      if (arr[0] == "D" && arr[1] == "A" && arr[2] == "D")//0
        tuningTitle = "Drop D";

      if (arr[0] == "C#" && arr[1] == "G#" && arr[2] == "C#")//-1
        tuningTitle = "Drop C#";

      if (arr[0] == "C" && arr[1] == "G" && arr[2] == "C")//-2
        tuningTitle = "Drop C";

      if (arr[0] == "B" && arr[1] == "F" && arr[2] == "B")//-3
        tuningTitle = "Drop B";

      element.style.color = "red";
    }
    
    element.innerHTML = "Guitar tuning: " + tuningTitle +" [" + tuning + "]";
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
    const storage = "https://dmitrybelkevich.github.io/city_17/storage/";
    
    try {
      // 1. Wait for the server headers and response status
      const response = await fetch(storage + path);
      
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
