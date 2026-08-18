export default class Musician {
  #voice;
  #instrument;

  get voice() {
    return this.#voice;
  }
  
  set voice(voice) {
    this.#voice = voice;
  }

  get instrument() {
    return this.#instrument;
  }
  
  set instrument(instrument) {
    this.#instrument = instrument;
  }
}
