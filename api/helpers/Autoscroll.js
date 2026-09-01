export default class Autoscroll {
  constructor() {
    this.state = false;
  }
  
  set state(state) {
    this.state = state;
  }

  run() {
    console.log("Autoscroll");
  }
}
