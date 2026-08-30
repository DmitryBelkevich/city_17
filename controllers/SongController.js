import Song from '../models/Song.js';
import SongView from '../views/SongView.js';
import SongService from '../dao/SongService.js';

export default class SongController {
  constructor(params) {
    const id = params.get("id");

    // model
    const songService = new SongService();
    this.song = songService.getById(id);

    // view
    this.view = new SongView();
  }
}
