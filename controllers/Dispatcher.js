export default class Dispatcher {
  constructor() {
    this.routes = {};
    
    this.register("", () => console.log('Main Page View'));
    this.register("/list", () => console.log('List Page View'));
    this.register("/song", () => console.log('Song Page View'));
    this.register("/404", () => console.log('Page not found'));
    
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
    const routeName = path.slice("/js_app".length, -1);

    const params = this.getParams();
    console.log(params.get("id"));
    
    const action = this.routes[routeName] || this.routes["/404"];
    action();
  }

  getParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
  }
}
