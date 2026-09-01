export default class Autoscroll {
  #state = false;
  
  set state(state) {
    this.#state = state;
  }

  nextState() {
    this.#state = !this.#state;
  }

  run() {
    this.nextState();
    this.operation();
  }

  operation() {
    const element = document.getElementById("text");

    element.scrollIntoView({
      behavior: "smooth", // Плавная прокрутка ("instant" для мгновенной)
      block: "start",     // Выравнивание элемента: "start", "center", "end", "nearest"
    });
  }
}
