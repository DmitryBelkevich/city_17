const songs = [
  { id: 1, band: "Король и Шут", title: "Воспоминание о былой любви", text: "link1", score: "link2", playback: "link3" },
  { id: 2, band: "Кино", title: "Группа крови", text: "link1", score: "link2", playback: "link3" }
];

class SongDao {
  getById(id) {
    const song = songs.find(song => song.id === id)
    
    return song;
  }
}
