export default class Dispatcher {
  constructor() {
    this.routes = {};

    this.register('/js_app' + '/', () => console.log('Main Page View'));
    this.register('/js_app' + '/list', () => console.log('List Page View'));
    this.register('/js_app' + '/song/', () => console.log('Song Page View'));
    this.register('/js_app' + '/404', () => console.log('Page not found'));

    window.addEventListener('popstate', () => this.handleRoute());
  }

  register(path, action) {console.log(path);
    this.routes[path] = action;
  }

  handleRoute() {
    const path = window.location.pathname;
    this.dispatch(path);
  }

  dispatch(path) {
    const action = this.routes[path] || this.routes['/404'];
    action();
  }
}
