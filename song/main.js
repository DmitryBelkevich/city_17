import SongController from '/api/controllers/SongController.js';

function main() {
  const controller = new SongController();
  console.log(controller);
}

const app = main();
