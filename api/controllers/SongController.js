import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

import TextLoader from '../loaders/TextLoader.js';

import Autoscroll from '../helpers/page/AutoScroll.js';

export default class SongController {
  #params;

  async init() {
    this.#params = new URLSearchParams(window.location.search);
    const id = this.#params.get("id");
    
    // model
    this.songService = new SongService();
    this.song = await this.songService.getById(id);

    // view
    this.view = new SongView();
    
    this.view.setPageTitle(this.song.band, this.song.title);
    this.view.setTitle(this.song.band, this.song.title);
    this.song.instruments.forEach((instrument, index) => {
      this.view.addTuning(instrument.title, instrument.tuning, instrument.capo);
    });

    // load text
    // this.loader = new TextLoader();
    // const text = await this.loader.loadData(this.song.text);
    // this.view.setText(text);
    console.log(song);

    // functions
    this.autoscroll = new Autoscroll();

    // binding controller-view:

    // tabs
    this.view.bindTextTab(this.openText);
    this.view.bindScoreTab(this.openScore);
    this.view.bindPlaybackTab(this.openPlayback);
    // autoscroll
    this.view.bindAutoscroll(this.auto_scroll);
  }

  openText = () => {
    console.log("open Text tab");
  }

  openScore = () => {
    if (!!this.song.score)
      window.open(this.song.score, "_blank");
  }

  openPlayback = () => {
    if (!!this.song.playback)
      window.open(this.song.playback, "_blank");
  }

  auto_scroll = () => {
    this.autoscroll.run();
  }
}
