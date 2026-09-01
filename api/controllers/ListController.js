export default class ListController {
  async init() {
    // view
    this.view = new ListView();
    this.view.update();
  }
}
