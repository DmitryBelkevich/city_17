import Song from './Song.js';

const song = new Song('Polina');
console.log(song.sayHello());

const user = {
    name: "Alex Rivera",
    role: "Developer",
    experience: "5 years"
};

window.song = song;
window.user = user;
