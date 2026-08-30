import MainView from '../views/MainView.js';

export default class MainController {
  constructor() {
    // view
    this.view = new MainView();
    this.view.update();
  }
}
