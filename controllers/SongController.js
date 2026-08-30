import Song from '../models/Song.js';
import SongView from '../views/SongView.js';

export default class SongController {
  constructor(params) {
    const id = params.get("id");
    
    this.song = new Song();//get from database by id
    this.view = new SongView();
  }
}
