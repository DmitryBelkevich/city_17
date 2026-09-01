export default class AutoScroll {
  #state = false;
  
  set state(state) {
    this.#state = state;
  }

  nextState() {
    this.#state = !this.#state;
  }

  run() {
    // this.nextState();
    this.operation();
  }

  operation() {
    function autoScroll() {
      // Прокручиваем страницу на 1 пиксель вниз
      window.scrollBy(0, 1); 
      
      // Проверяем, не достигли ли мы конца страницы
      if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
        requestAnimationFrame(autoScroll);
      }
    }
    
    // Запустить автоскролл
    autoScroll();
  }
}
