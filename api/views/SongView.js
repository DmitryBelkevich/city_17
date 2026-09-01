export default class SongView {
  constructor() {
    this.body = document.body;
    
    this.title = document.createElement("div");
    this.title.id = "title";

    this.body.append(this.title);
  }

  update() {
    this.setPageTitle();
    
    this.title.textContent = "Hello World";
  }

  setPageTitle() {
    document.title = "Hello World";
  }
}
