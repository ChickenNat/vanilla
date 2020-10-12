window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#CCFF00",
        "#CCCC00",
        "#CC9900",
        "#CC6600",
        "#CC3300",
        "#660000"
    ];

    //sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBalls(index);
        });
    });

    //balls effect
    const createBalls = (index) => {
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = 'jump 1s ease';
        ball.addEventListener('animationend', function(){
            visual.removeChild(this);
        });

    };
});

