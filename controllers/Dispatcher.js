export default class Dispatcher {
  appName = "/js_app";
  
  constructor() {
    this.routes = {};
    
    this.register(appName + "", () => console.log('Main Page View'));
    this.register(appName + "/list", () => console.log('List Page View'));
    this.register(appName + "/song", () => console.log('Song Page View'));
    this.register(appName + "/404", () => console.log('Page not found'));
    console.log(this.routes);
    
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
    const action = this.routes[path] || this.routes[appName + "/404"];
    action();
  }
}
