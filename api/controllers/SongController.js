import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

import TextLoader from '../dao/loaders/TextLoader.js';

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
    this.view.setPageTitle(this.song.band, this.song.title);

    this.view.setTitle(this.song.band, this.song.title);

    const loader = new TextLoader();
    const text = await loader.loadData(this.song.text);
    this.view.setText(text);
  }
}
