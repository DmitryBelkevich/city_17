export default class AutoScroll {
  constructor() {
    this.speed = 15;//1 slow, 10 normal, 100 fast.

    let animationFrameId;

    const step = () => {
      window.scrollBy(0, 1);
      
      if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(step);
        }, 1000 / this.speed);
      }
    }
    
    // 1. Start the scroll loop
    animationFrameId = requestAnimationFrame(step);
    
    // 2. Stop the scroll loop
    function stopAutoScroll() {
      cancelAnimationFrame(animationFrameId);
    }
  }
  
  run() {
    
  }
}
