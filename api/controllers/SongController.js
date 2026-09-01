import Song from '../models/Song.js';
import SongView from '../views/SongView.js';
import SongService from '../services/SongService.js';

export default class SongController {
  #params;
  
  constructor() {
    // model
    this.songService = new SongService();

    // view
    this.view = new SongView();
  }

  set params(params) {
    this.#params = params;
  }

  async init() {
    console.log(window.location.href);
    
    const id = this.#params.get("id");
    
    // model
    const song = await this.songService.getById(16);

    console.log(song);

    // view
    this.view.update();
  }
}
