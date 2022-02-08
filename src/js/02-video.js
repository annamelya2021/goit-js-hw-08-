

import Player from '@vimeo/player';
import { throttle }  from 'lodash';

const videoPlayerRef = document.querySelector("iframe")
const player = new Player(videoPlayerRef)
console.dir(videoPlayerRef);
// паттерн магические числа и строки
const KEY = "videoplayer-current-time"
// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };
const onPlay = function (data) {
// получаем значение
    const time = data.seconds
    console.log(time);
// значение из инпута всегда строка стригифаим только масивы и обьекты
// сохраняем  значение  в хранилище
    localStorage.setItem(KEY , time)
};

const throtlleFunction = throttle(onPlay, 1000)

player.on('timeupdate', throtlleFunction);
//    player.on('play', function() {
        // console.log('played the video!');
//     });

// // получаем значение из локал стореджа
const getStorageData = localStorage.getItem(KEY)
// при перезагрузке страницы
//  если getStorageData приводится к тру, то тогда мы можем с ним работать
// если ключа нет вернет null  но ничего не выполнится
if (getStorageData) {
    //  если да, плеер сохранни поченные значения из локалстореджа
     player.setCurrentTime(getStorageData)
}







//  if (localStorage.getItem("videoplayer-current-time")){
//      player.setCurrentTime(localStorage.getItem("videoplayer-current-time" ))
// }



//     <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

// <script src="https://player.vimeo.com/api/player.js"></script>
// <script>
//     const iframe = document.querySelector('iframe');
//     const player = new Vimeo.Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
// </script>

// on(event: string, callback: function): void
// Add an event listener for the specified event. Will call the callback with a single parameter, data, that contains the data for that event. See events below for details.



// player.on('play', onPlay);