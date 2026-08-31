import FrontController from '../controllers/front/FrontController.js';
import DatabaseLoader from '../dao/loaders/DatabaseLoader.js';

async function main() {
  const frontController = new FrontController();

  const path = window.location.pathname;
  frontController.dispatch(path);

  // const databaseLoader = new DatabaseLoader();
  // const data = await databaseLoader.loadData();
  // console.log(data);
}

const app = main();
