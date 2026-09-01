export default class Autoscroll {
  constructor() {
    this.state = false;
  }
  
  set state(st) {
    this.state = st;
  }

  run() {
    console.log("Autoscroll");
  }
}
