import Song from '../models/Song.js';
import DatabaseLoader from '/loaders/DatabaseLoader.js';

export default class SongDao {
  getById(id) {
    new DatabaseLoader();
    
    console.log("get from database by id=" + id);

    const song = new Song();

    // fill params

    return song;
  }
}
