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
    const text = "<div>Text & Chords</div><div>Text & Chords</div>";
    
    this.setPageTitle();

    this.setTitle();
    this.setText(text);
  }

  setPageTitle() {
    document.title = "Band" + " - " + "Title";
  }

  setTitle() {
    this.title.textContent = "Band" + " - " + "Title";
  }

  setText(text) {
    this.text.innerHTML = text;
  }
}
