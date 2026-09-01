import Song from '../models/Song.js';
import SongView from '../views/SongView.js';
import SongService from '../services/SongService.js';

export default class SongController {
  #params;
  
  constructor() {
    const queryString = window.location.search;
    this.#params = new URLSearchParams(queryString);
    
    // model
    this.songService = new SongService();

    // view
    this.view = new SongView();
  }

  set params(params) {
    this.#params = params;
  }

  async init() {
    const id = this.#params.get("id");
    
    // model
    const song = await this.songService.getById(id);

    console.log(song);

    // view
    this.view.update();
  }
}
