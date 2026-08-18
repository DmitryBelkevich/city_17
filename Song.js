export default class Song {
  #id;
  band;
  title;
  text;
  score;
  playback;
  
  get id() {
    return this.id;
  }
  
  set id(id) {
    this.id = id;
  }
}
