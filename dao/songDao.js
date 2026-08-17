class SongDao {
  getById(id) {
    const song = new Song();

      song.id = id;
      song.title = "Воспоминание о былой любви";
      song.text = "link1";
      song.score = "link2";
      song.playback = "link3";
    
    return song;
  }
}
