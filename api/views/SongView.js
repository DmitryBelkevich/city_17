export default class SongView {
  constructor() {
    // reset css
    this.loadCSS("../css/reset.css");
    
    // Title
    this.title = document.createElement("div");
    this.title.id = "title";
    this.loadCSS("../css/song/title.css");

    // Tab 1
    this.tab_text = document.createElement("button");
    this.tab_text.id = "tab_text";
    this.tab_text.classList.add("tab");
    this.tab_text.textContent = "📝 Text & Chords";

    // Tab 2
    this.tab_score = document.createElement("button");
    this.tab_score.id = "tab_score";
    this.tab_score.classList.add("tab");
    this.tab_score.textContent = "🎵 Scores";

    // Tab 3
    this.tab_playback = document.createElement("button");
    this.tab_playback.id = "tab_playback";
    this.tab_playback.classList.add("tab");
    this.tab_playback.textContent = "🎧 Playbacks";

    // Tabs
    this.tabs = document.createElement("div");
    this.tabs.id = "tabs";
    this.loadCSS("../css/song/tabs.css");
    
    this.tabs.append(this.tab_text, this.tab_score, this.tab_playback);

    // Tuning
    this.tuning = document.createElement("div");
    this.tuning.id = "tuning";
    this.loadCSS("../css/song/tuning.css");
    
    // Text
    this.text = document.createElement("div");
    this.text.id = "text";
    this.loadCSS("../css/song/text.css");

    // Footer
    this.footer = document.createElement("div");
    this.footer.id = "footer";
    this.loadCSS("../css/song/footer.css");
    this.footer.textContent = "Copyright © Dmitry Belkevich";

    // body fill
    this.body = document.body;
    this.body.append(this.title, this.tabs, this.tuning, this.text, this.footer);
  }

  loadCSS(url) {
    const link = document.createElement("link");
    
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    
    document.head.appendChild(link);
  }

  setPageTitle(band, title) {
    document.title = band + " - " + title;
  }

  setTitle(band, title) {
    const title_e = document.createElement('h1');
    title_e.textContent = title;
    
    const band_e = document.createElement('h2');
    band_e.textContent = band;
    
    this.title.append(title_e, band_e);
  }

  setTabs(score, playback) {
    this.tab_text.addEventListener("click", () => {
      console.log("open text tab");
    });
    
    this.tab_score.addEventListener("click", () => {
      if (!score)
        return;
      
      window.open(score, "_blank");
    });
    
    this.tab_playback.addEventListener("click", () => {
      if (!playback)
        return;
      
      window.open(playback, "_blank");
    });
  }

  addTuning(title, tuning) {
    const tuning_e = document.createElement("div");
    // tuning_e.classList.add("guitar");
    
    this.tuning.append(tuning)_e;
    
    // this.guitarTuning.textContent = instruments[0].tuning;
    // this.bassTuning.textContent = instruments[1].tuning;
  }

  setText(text) {
    this.text.innerHTML = text;
  }
}
