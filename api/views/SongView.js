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
    this.setPageTitle();

    this.setTitle();
    this.setText();
  }

  setPageTitle() {
    document.title = "Band" + " - " + "Title";
  }

  setTitle() {
    this.title.textContent = "Band" + " - " + "Title";
  }

  setText() {
    this.text.innerHTML = "<div>Text & Chords</div>";
  }
}
