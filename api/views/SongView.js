import Tuning from '../helpers/Tuning.js';

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

    // display
    this.display = document.createElement("div");
    this.display.id = "display";
    this.loadCSS("../css/song/display.css");

    this.display.textContent = "Key: Am, [Voice 1] [Bass Guitar]";
    
    // Settings
    this.settings = document.createElement("div");
    this.settings.id = "settings";
    this.loadCSS("../css/song/settings.css");
    
    // Auto-scroll
    this.autoscroll_e = document.createElement("button");
    this.autoscroll_e.id = "autoscroll";
    this.autoscroll_e.textContent = "⏬ auto-scroll";
    
    this.settings.append(this.autoscroll_e);
    
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
    this.body.append(
      this.title,
      this.tabs,
      // this.display,
      this.settings,
      this.tuning,
      this.text,
      this.footer
    );
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

  bindTextTab(handler) {
    this.tab_text.addEventListener("click", () => {
      handler();
    });
  }

  bindScoreTab(handler) {
    this.tab_score.addEventListener("click", () => {
      handler();
    });
  }

  bindPlaybackTab(handler) {
    this.tab_playback.addEventListener("click", () => {
      handler();
    });
  }
  
  bindAutoscroll(handler) {
    this.autoscroll_e.addEventListener("click", () => {
      handler();
    });
  }

  addTuning(title, tuning, capo) {
    const tuning_e = document.createElement("div");

    if (Tuning.isStandard(tuning))
      tuning_e.classList.add("standard");
    else
      tuning_e.classList.add("non-standard");
    
    tuning_e.textContent = title + " (" + Tuning.getTitle(tuning) + ")" + " [" + tuning + "]";
    
    this.tuning.append(tuning_e);

    if (capo)
      this.addCapo(capo);
  }

  addCapo(capo) {
    const capo_e = document.createElement("div");

    capo_e.classList.add("capo");

    capo_e.textContent = "Capo: +" + capo;

    this.tuning.append(capo_e);
  }

  setText(text) {
    this.text.innerHTML = text;
  }
}
