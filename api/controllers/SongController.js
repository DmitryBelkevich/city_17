import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

import TextLoader from '../loaders/TextLoader.js';

import Autoscroll from '../helpers/AutoScroll.js';

export default class SongController {
  #params;
  
  constructor() {
    this.#params = new URLSearchParams(window.location.search);
    
    // model
    this.songService = new SongService();
    this.loader = new TextLoader();

    // view
    this.view = new SongView();

    // functions
    this.autoscroll = new Autoscroll();
  }

  async init() {
    // model
    const id = this.#params.get("id");
    this.song = await this.songService.getById(id);
    
    // view
    this.view.setPageTitle(this.song.band, this.song.title);

    this.view.setTitle(this.song.band, this.song.title);

    this.song.instruments.forEach((instrument, index) => {
      this.view.addTuning(instrument.title, instrument.tuning, instrument.capo);
    });
    
    const text = await this.loader.loadData(this.song.text);
    this.view.setText(text);

    // binds:

    // tabs
    this.view.bindTextTab(this.openText);
    this.view.bindScoreTab(this.openScore);
    this.view.bindPlaybackTab(this.openPlayback);
    // autoscroll
    this.view.bindAutoscroll(this.autoscroll.opearation);
  }

  openText() {
    console.log("open Text tab");
  }

  openScore() {
    if (!this.song.score)
      return;
    
    window.open(this.song.score, "_blank");
  }

  openPlayback() {
    console.log("open Playback tab");
    if (!this.song.playback)
      return;
    
    window.open(this.song.playback, "_blank");
  }
}
