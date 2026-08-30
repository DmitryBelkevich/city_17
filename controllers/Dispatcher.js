import MainController from './MainController.js';
import ListController from './ListController.js';
import SongController from './SongController.js';

export default class Dispatcher {
  constructor() {
    this.routes = {};
    
    this.register("", () => new MainController());
    this.register("/list", () => new ListController());
    this.register("/song", (params) => new SongController(params));
    
    this.register("/404", () => {
      console.log('Page not found');
    });
    
    window.addEventListener('popstate', () => this.handleRoute());
  }

  register(path, action) {
    this.routes[path] = action;
  }

  handleRoute() {
    const path = window.location.pathname;
    this.dispatch(path);
  }

  dispatch(path) {
    const appName = "city_17";
    const routeName = path.slice(("/" + appName).length, -1);

    const params = this.getParams();
    
    const action = this.routes[routeName] || this.routes["/404"];
    action(params);
  }

  getParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
  }
}
