import SongService from '../services/SongService.js';
import ListView from '../views/ListView.js';

export default class ListController {
  async init() {
    // model
    this.songService = new SongService();
    this.songs = await this.songService.getAll();

    this.songs.forEach((song, index) => {
      console.log(song);
    });
    
    // view
    this.view = new ListView();
  }
}
