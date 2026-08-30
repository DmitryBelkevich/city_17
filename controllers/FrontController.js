export default class FrontController {
  constructor() {
    this.routes = {};

    this.register('/', () => console.log('Home Page View'));
    this.register('/list', () => console.log('List Page View'));
    this.register('/song', () => console.log('Song Page View'));
    this.register('/404', () => console.log('Page not found'));
    
    window.addEventListener('popstate', () => this.handleRoute());
  }

  register(path, action) {
    this.routes[path] = action;
  }
  
  dispatch(path) {
    const action = this.routes[path] || this.routes['/404'];
    action();
  }

  handleRoute() {
    const path = window.location.pathname;
    this.dispatch(path);
  }
}
