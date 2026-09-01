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
    
    this.title.textContent = "Hello World";

    this.text.innerHTML = "<div>Text & Chords</div>";
  }

  setPageTitle() {
    document.title = "Hello World";
  }
}
