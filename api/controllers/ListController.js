import ListView from '../views/ListView.js';

export default class ListController {
  async init() {
    // view
    this.view = new ListView();
    this.view.update();
  }
}
