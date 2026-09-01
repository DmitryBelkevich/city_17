export default class Autoscroll {
  #state = false;
  
  set state(state) {
    this.#state = state;
  }

  nextState() {
    this.#state = !this.#state;
  }

  run() {
    console.log(this.#state);
    this.nextState();
  }
}
