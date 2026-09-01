import Song from '../models/Song.js';
import DatabaseLoader from './loaders/DatabaseLoader.js';

export default class SongDao {
  constructor() {
    this.databaseLoader = new DatabaseLoader();
  }
  
  async getById(id) {
    const path = "../database/songs.json";
    const data = await this.databaseLoader.loadData(path);
    const result = data.find(song => song.id == id) || null;

    if (!result)
      return null;

    const song = new Song();

    song.id = result.id;
    song.band = result.band;
    song.title = result.title;
    song.text = result.text;
    song.score = result.score;
    song.playback = result.playback;
    song.voices = result.voices;
    song.instruments = result.instruments;

    return song;
  }
}
