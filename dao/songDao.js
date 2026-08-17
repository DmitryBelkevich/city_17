const songs = [
  { id: 1, band: "Король и Шут", title: "Воспоминание о былой любви", text: "", score: "", playback: "" },
  { id: 2, band: "Кино", title: "Группа крови" }
];

class SongDao {
  getById(id) {
    const song = songs.find(song => song.id === id)
    
    return song;
  }
}
