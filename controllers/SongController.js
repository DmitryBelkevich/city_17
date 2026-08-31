import Song from '../models/Song.js';
import SongView from '../views/SongView.js';
import SongService from '../services/SongService.js';

export default class SongController {
  constructor(params) {
    const id = params.get("id");

    // model
    const songService = new SongService();
    this.song = songService.getById(id);

    console.log(this.song);

    // view
    this.view = new SongView();
    this.view.update();
  }
}
