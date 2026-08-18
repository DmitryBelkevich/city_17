export default class Song {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, my name is ${this.name}!`;
  }
  
  get id() {
    return this.id;
  }
  set id(id) {
    this.id = id;
  }

  get title() {
    return this.title;
  }

  set title(title) {
    this.id = id;
  }

  get text() {
    return this.text;
  }

  set text(text) {
    this.text = text;
  }

  get score() {
    return this.score;
  }

  set score(score) {
    this.score = score;
  }

  get playback() {
    return this.playback;
  }

  set playback(playback) {
    this.playback = playback;
  }
}
