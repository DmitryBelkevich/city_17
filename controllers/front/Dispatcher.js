import MainController from '../MainController.js';
import ListController from '../ListController.js';
import SongController from '../SongController.js';

export default class Dispatcher {
  constructor() {
    this.routes = {};
    
    this.addRoute("", new MainController());
    this.addRoute("/list", new ListController());
    this.addRoute("/song", new SongController());
  }

  addRoute(path, controller) {
    this.routes[path] = controller;
  }

  dispatch(path) {
    const appName = "city_17";
    const routeName = path.slice(("/" + appName).length, -1);
    
    const controller = this.routes[routeName];
    
    controller.params = this.getParams();
    controller.init();
  }

  getParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
  }
}
