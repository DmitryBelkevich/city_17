const songs = [
  { id: 1, band: "Король и Шут", title: "Воспоминание о былой любви", text: "link1", score: "link2", playback: "link3" },
  { id: 2, band: "Кино", title: "Группа крови", text: "link1", score: "link2", playback: "link3" }
];

class SongDao {
  getById(id) {
    const s = songs.find(song => song.id === id);

    if (!s)
      throw new Error(`User with ID ${id} not found.`);

    const song = new Song();

    song.id = s.id;
    song.band = s.band;
    song.title = s.title;
    song.text = s.text;
    song.score = s.score;
    song.playback = s.playback;
    
    return song;
  }
}
