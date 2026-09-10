import SongDao from '../dao/SongDao.js';
import JsonLoader from '../loaders/JsonLoader.js';

export default class SongService {
  constructor() {
    this.songDao = new SongDao();
    this.loader = new JsonLoader();
  }

  async getAll() {
    const songs = await this.songDao.getAll();

    return songs;
  }
  
  async getById(id) {
    const song = await this.songDao.getById(id);
    
    song.text_content = await this.loader.loadData(song.text_json);

    const marks = song.text_content.filter((element) => {
      return element.class.startsWith("mark");
    });

    const parts = song.text_content.filter((element) => {
      return element.class.startsWith("part");
    });

    // console.log(marks);
    // console.log(parts);

    const chords = [];
    parts.forEach((element) => {
      const part = element.value;
      part.filter((obj) => {
        if (obj.class == "chords")
          chords.push(...obj.value);
      });
    });

    console.log(chords);

    song.instruments.forEach((instrument, index) => {
      if (instrument.title == "Guitar")
        if (!instrument.tuning)
          instrument.tuning = ["E", "A", "D", "G", "B", "E"];

      if (instrument.title == "Bass Guitar")
        if (!instrument.tuning)
          instrument.tuning = ["E", "A", "D", "G"];

      if (instrument.title == "5-string Bass Guitar")
        if (!instrument.tuning)
          instrument.tuning = ["B", "E", "A", "D", "G"];

      if (instrument.title != "Keyboards")
        if (!instrument.capo)
          instrument.capo = 0;

      if (instrument.title == "Keyboards")
        if (!instrument.transposition)
          instrument.transposition = 0;
    });
    
    return song;
  }
}
