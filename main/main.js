import FrontController from '../controllers/front/FrontController.js';

function main() {
  const frontController = new FrontController();

  const path = window.location.pathname;
  frontController.dispatch(path);
}

const main = main();
