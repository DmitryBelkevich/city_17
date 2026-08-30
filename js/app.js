import FrontController from '../controllers/FrontController.js';

function main() {
  const frontController = new FrontController();
  frontController.dispatch("/");
}

const app = main();
