export default class SongView {
  constructor() {
    this.body = document.body;
    
    this.title = document.createElement("div");
    this.title.id = "title";

    this.body.append(this.title);
  }

  update() {
    console.log("draw SongView");
    this.title.textContent = "Hello World";
  }
}
