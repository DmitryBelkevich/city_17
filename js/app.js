class FrontController {
  dispatch(request) {
    console.log("Page requested: " + request);
  }
}

function main() {
  const frontController = new FrontController();
  
  frontController.dispatch("/song");
}

const app = main();
