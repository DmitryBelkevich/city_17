const database = [
  { id: 1, band: "Король и Шут", title: "Воспоминание о былой любви" },
  { id: 2, band: "Кино", title: "Группа крови" }
];

class SongDao {
  getById(id) {
    const song = database.find(song => song.id === id)
    
    return song;
  }
}
