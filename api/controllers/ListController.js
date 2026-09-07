import ListView from '../views/ListView.js';

export default class ListController {
  constructor() {
    console.log("ListController constructor");
  }
  
  async init() {
    console.log("ListController init");
    
    // view
    this.view = new ListView();
    this.view.update();
  }
}
