window.addEventListener("load", (event) => {
    var start = false;
    var green = false;
    var gameFinished = false;
    var timeoutId;
    var greenTime;
    var clickTime;

    function playAudioStart() {
        var audio = document.getElementById("skibidiSound");
        if(audio){
            audio.play()
        }
    }

    function playAudioClick(){
        var audio = document.getElementById("boomSound");
        if(audio){
            audio.play()
        }
    }

    function pauseAudioStart(){
        var audio = document.getElementById("skibidiSound");
        if(audio){
            audio.pause()
        }
    }

    function resetGame() {
        location.reload();
    }

    function setGreen() {
        green = true;
        pauseAudioStart();
        playAudioClick();
        greenTime = performance.now();
        // console.log("Green time = ",greenTime) //comment when committing
    }

    document.getElementsByClassName("game1")[0].addEventListener("click", (event) =>{
        event.preventDefault();
        document.body.style.visibility = "hidden";
        window.location.href = "game.html"
    })

    document.getElementsByClassName("game3")[0].addEventListener("click", (event) =>{
        event.preventDefault();
        document.body.style.visibility = "hidden";
        window.location.href = "game3.html"
    })

    window.addEventListener("click", (event) => {
        if (gameFinished) {
            resetGame();
            return;
        }

        if (!start) {
            document.getElementsByClassName("arst")[0].classList.add("d-none");
            document.getElementsByClassName("text")[0].style.color = "rgb(250, 242, 227)"
            document.getElementsByClassName("text")[0].innerHTML="<H1>Listen to the sound!</H1>";
           
            playAudioStart();
            var waitTime = Math.floor(Math.random() * 5001 + 1000);
            // console.log("wait time: ", waitTime) //comment when committing
            start = true;

            timeoutId = setTimeout(setGreen, waitTime);
        } else {
            if (!green) {    
                pauseAudioStart();
                document.getElementsByClassName("text")[0].innerHTML = "<H1>Too early sigma! Calm down!<br>Click to try again.</H1>";
                gameFinished = true; 
                clearTimeout(timeoutId);
            } else {
                clickTime = performance.now();
                // console.log("click time = ",clickTime); //comment when committing
                var reactSpeed = Math.floor(clickTime - greenTime);
                // console.log("React speed: ", reactSpeed); //comment when committing
 
                if (reactSpeed <= 100){
                    document.getElementsByClassName("text")[0].innerHTML = `<H1>Your Speed is ${reactSpeed}ms.<br>YOU'RE A GOD SIGMA! DID YOU CHEAT? Click to restart.</H1> <img src="img/god.png" alt="god">`;
                }else if (reactSpeed < 200) {
                    document.getElementsByClassName("text")[0].innerHTML = `<H1>Your Speed is ${reactSpeed}ms.<br>Amazing job Sigma! Click to restart.</H1> <img src="img/gigachad.jpg" alt="gigachad">`;
                } else if (reactSpeed < 250) {
                    document.getElementsByClassName("text")[0].innerHTML = `<H1>Your Speed is ${reactSpeed}ms.<br>Nice attempt Sigma! Click to restart.</H1> <img src="img/sigma.jpg" alt="sigma">`;
                } else {
                    document.getElementsByClassName("text")[0].innerHTML = `<H1>Your Speed is ${reactSpeed}ms.<br>Looks like you're a Beta. What a disappointment. Click to restart.</H1> <img src="img/beta.jpg" alt="beta">`;
                }
                gameFinished = true;
            }
        }
    });
});

