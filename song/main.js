import SongController from '../api/controllers/SongController.js';

function main() {
  const controller = new SongController();
  controller.init();
}

const app = main();
