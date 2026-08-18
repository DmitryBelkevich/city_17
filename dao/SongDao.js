import Song from 'models/Song.js';

export default class SongDao {
  async loadData() {
    try {
      // 1. Wait for the server headers and response status
      const response = await fetch('../../database/songs.json');
      
      // 2. Check if the HTTP status code is successful (200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // 3. Wait for the full body data to download and parse as JSON
      const data = await response.json();
      // console.log(data);
      
      return data;
    } catch (error) {
      // 4. Handle network errors or parsing issues
      console.error('Fetch failed:', error);
    }
  }

  async getAll() {
    const data = await this.loadData();
    // return array Song()
  }

  async getById(id) {
    const data = await this.loadData();
    const result = data.find(s => s.id == id) || null;

    if (!result)
      return null;
      
    song = new Song(result.id, result.band, result.title, result.text, result.score, result.playback);
    
    return song;
  }
}
