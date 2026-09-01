export default class AutoScroll {
  operation() {
    let animationFrameId;

    function step() {
      window.scrollBy(0, 10);
      
      if ((window.innerHeight + window.scrollY) < document.body.offsetHeight)
        animationFrameId = requestAnimationFrame(step);
    }
    
    // 1. Start the scroll loop
    animationFrameId = requestAnimationFrame(step);
    
    // 2. Stop the scroll loop
    function stopAutoScroll() {
      cancelAnimationFrame(animationFrameId);
    }
  }
}
