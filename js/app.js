import FrontController from '../controllers/FrontController.js';

function main() {
  const frontController = new FrontController();
  frontController.dispatch("/");

  console.log(window.location.pathname);
}

const app = main();
