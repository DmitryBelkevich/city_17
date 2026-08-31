import Song from '../models/Song.js';
import DatabaseLoader from './loaders/DatabaseLoader.js';

export default class SongDao {
  constructor() {
    this.databaseLoader = new DatabaseLoader();
  }
  
  async getById(id) {
    console.log("get from database by id=" + id);
    const data = await this.databaseLoader.loadData();
    console.log(data);

    const song = new Song();

    // fill params

    return song;
  }
}
