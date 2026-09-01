export default class SongView {
  constructor() {
    this.body = document.body;
    
    this.title = document.createElement("div");
    this.title.id = "title";

    this.text = document.createElement("div");
    this.text.id = "text";

    this.body.append(this.title, this.text);
  }

  update() {
    const band = "Band";
    const title = "Title";
    const text = "<div>Text & Chords</div><div>Text & Chords</div>";
    
    this.setPageTitle(band, title);

    this.setTitle(band, title);
    this.setText(text);
  }

  setPageTitle(band, title) {
    document.title = band + " - " + title;
  }

  setTitle(band, title) {
    const title_e = document.createElement('h1');
    title_e.textContent = title;
    
    const band_e = document.createElement('h2');
    band_e.textContent = band;
    
    element.append(title_e, band_e);
  }

  setText(text) {
    this.text.innerHTML = text;
  }
}
