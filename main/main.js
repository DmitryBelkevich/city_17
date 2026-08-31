import FrontController from '../controllers/front/FrontController.js';
import DatabaseLoader from '../dao/loaders/DatabaseLoader.js';

function main() {
  const frontController = new FrontController();

  const path = window.location.pathname;
  frontController.dispatch(path);

  const databaseLoader = new DatabaseLoader();
  const data = await databaseLoader.loadData();
  cosole.log(data);
}

const app = main();
