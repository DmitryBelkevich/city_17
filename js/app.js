class FrontController {
  constructor() {
    this.routes = {};
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

function main() {
  const frontController = new FrontController();
  
  // frontController.dispatch("/song");
  frontController.register('/', () => console.log('Home Page View'));
  frontController.register('/about', () => console.log('About Page View'));
  frontController.register('/404', () => console.log('Page Not Found'));
}

// const app = main();

const frontController = new FrontController();

frontController.register('/', () => console.log('Home Page View'));
frontController.register('/about', () => console.log('About Page View'));
frontController.register('/404', () => console.log('Page Not Found'));
