export default class SongView {
  constructor() {
    // reset css
    this.loadCSS("../css/reset.css");
    
    // Title
    this.title = document.createElement("div");
    this.title.id = "title";
    this.loadCSS("../css/song/title.css");

    // Tabs
    this.loadCSS("../css/song/tabs.css");

    // Text
    this.text = document.createElement("div");
    this.text.id = "text";
    this.loadCSS("../css/song/text.css");

    // body fill
    this.body = document.body;
    this.body.append(this.title, this.text);
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

  setText(text) {
    this.text.innerHTML = text;
  }
}
