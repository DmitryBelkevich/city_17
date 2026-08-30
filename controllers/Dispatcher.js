class Song() {
  
}

class SongController {
  constructor() {
    const id = 1;//get from database
    
    this.song = new Song();
    // this.view = view;
  }
}

export default class Dispatcher {
  constructor() {
    this.routes = {};
    
    this.register("", () => {
      console.log('Main Page View');
      console.log('Load MainController');
    });
    
    this.register("/list", () => {
      console.log('List Page View');
      console.log('Load ListController');
    });
    
    this.register("/song", (id) => {
      console.log('Song Page View');
      console.log('Load SongController');
      console.log('id=' + id);
      // return new SongController();
    });
    
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
    const routeName = path.slice("/js_app".length, -1);

    const params = this.getParams();
    console.log(params.get("id"));
    
    const action = this.routes[routeName] || this.routes["/404"];
    action("5");
  }

  getParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams;
  }
}
