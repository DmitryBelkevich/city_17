export default class AutoScroll {
  animationFrameId;

  step() {
    window.scrollBy(0, 1);
    
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(this.step);
      }, 1000 / 15);
    }
  }
  
  // 1. Start the scroll loop
  run() {
    this.animationFrameId = requestAnimationFrame(this.step);
  }
  
  // 2. Stop the scroll loop
  stopAutoScroll() {
    cancelAnimationFrame(this.animationFrameId);
  }
}
