class SongDao {
  getById(id) {
    const song = new Song();

      song.id = id;
      song.title = "Воспоминание о былой любви";
      song.text = "link";
      song.score = "link";
      song.playback = "link";
    
    return song;
  }
}
