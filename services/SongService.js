import SongDao from '../dao/SongDao.js';

export default class SongService {
  constructor() {
    this.songDao = new SongDao();
  }
  
  getById(id) {
    const song = this.songDao.getById(id);

    console.log(song);
    // fill empty fields

    return song;
  }
}
