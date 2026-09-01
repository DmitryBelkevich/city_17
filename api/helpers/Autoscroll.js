export default class Autoscroll {
  #state = false;
  
  set state(state) {
    this.#state = state;
  }

  run() {
    console.log("Autoscroll");
  }
}
