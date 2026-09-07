import MainView from '../views/MainView.js';

export default class MainController {
  constructor() {
    console.log("MainController constructor");
  }
  
  async init() {
    console.log("MainController init");
    
    // view
    this.view = new MainView();
    this.view.update();
  }
}
