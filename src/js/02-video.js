import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME));

player.on('timeupdate', throttle(onSaveTime, 5000));

function onSaveTime(d) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(d.seconds))
}

player.setCurrentTime(savedTime || 0);