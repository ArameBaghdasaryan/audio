var data = {

title: [
    "Back-in-black",
    "Stand-up"
    ""
],


song:[
    "music/music1.mp3",
    "music/mu.mp3"
],

poster:[
  "https://www.flickofthefinger.co.uk/wp-content/uploads/2018/03/maxresdefault.jpg",
  "https://cloudimages.broadwayworld.com/columnpiccloud/1250-60744f51ee16acaa6ba53b42febb6282.jpg"
],


}

// console.log(new audio());
// console.log(window);

var song = new Audio
console.log(song);

var currentSong = 0;

window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];

    let songTitleb= document.getElementById("songTitle");
    songTitleb.textContent = data.title[currentSong];

    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] +")";

    let main = document.getElementById("main");
    main.style.backgroundImage = "url(" + data.poster[currentSong] +")";
    song.play();
}

function playOrPauseSong() {
    let play = document.getElementById("play")
    // console.log(play);

    if (song.paused) {
        song.play();
        play.src = "nkar/pause.png"
        
    }else{
        song.pause();
        play.src = "nkar/play-button-arrowhead.png"
    }
}

song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);
    let fill = document.getElementById("fill")
    // console.log(fill);
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; // fill
    
    convertTime(song.currentTime) // cur. time
    
    if (song.ended) {
    next()
    }
    })


    function convertTime(seconds) {

        let currentTime = document.getElementById ("currentTime")
        
        let min = Math.floor(seconds / 60)
        let sec = Math.floor(seconds % 60)
        
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
        
        
        currentTime.textContent = min + ":" + sec
        totalTime(Math.round(song.duration))
        console.log(seconds);
        console.log(min);
        
        };

        function totalTime(seconds) {
            var min = Math.floor(seconds / 60)
            var sec = Math.floor(seconds % 60)
            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent += " / " + min + ":" + sec
            
            };

        function next(){
            currentSong++;
            if (currentSong >= data.song.length) {
                currentSong = 0 
            }
            playSong();
            play.src = "nkar/pause.png"
        }

        function pre(){
            currentSong--;
            if (currentSong < 0) {
                currentSong = data.song.length - 1;
            }
            playSong();
            play.src = "nkar/pause.png"
        }
        

        function muted() {
            var mute = document.getElementById("mute")
            if (song.muted) {
                song.muted = false
                mute.src = "nkar/volume.png"
            }else{
                song.muted = true
                mute.src = "nkar/volume-mute.png"
            }
        }