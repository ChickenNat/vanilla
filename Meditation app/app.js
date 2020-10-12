const app = () => {
    const song = document.querySelector('.song'); 
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //Sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    //Time display
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');
    //Outline length
    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //pick difrent sounds
    sounds.forEach(sound =>{
        sound.addEventListener('click', function(){
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song);
        });
    });

    //play sounds
    play.addEventListener('click', () =>{
        checkPlaying(song);
    });

    //select Times
    timeSelect.forEach(option => {
        option.addEventListener('click', function() {
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60
                )}`;
        }); 
    });

    //play and pause
   const checkPlaying = song => {
       if(song.paused){
           song.play();
           video.play();
           play.src = './SVG/pause.svg';
       }else{
           song.pause();
           video.pause();
           play.src = './SVG/play.svg';
       }
   };

   //play animation
   song.ontimeupdate = () => {
       let currentTime = song.currentTime;
       let elapsed = fakeDuration - currentTime;
       let seconds = Math.floor(elapsed % 60);
       let minutes = Math.floor(elapsed / 60);   
   
   
   //animate circle
   let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
   outline.style.strokeDashoffset = progress;

   //animate timer
   timeDisplay.textContent = `${minutes}:${seconds}`;

   if(currentTime >= fakeDuration){
       song.pause();
       song.currentTime = 0;
       play.src = './SVG/play.svg';
       video.pause();
   }
   };
};

app();