import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

export default class SongController {
  #params;
  
  constructor() {
    this.#params = new URLSearchParams(window.location.search);
    
    // model
    this.songService = new SongService();

    // view
    this.view = new SongView();
  }

  async init() {
    // model
    const id = this.#params.get("id");
    this.song = await this.songService.getById(id);
    
    // view
    this.view.update();
  }
}
