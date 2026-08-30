import FrontController from '../controllers/FrontController.js';

function main() {
  const frontController = new FrontController();

  const path = window.location.pathname;
  frontController.dispatch(path);
}

const app = main();
