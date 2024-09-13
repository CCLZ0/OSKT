window.addEventListener("load", () => {
    var start = false;
    var gameFinished = false;
    var score = 0;
    var sec = 30;
    var timer;
    var target = document.getElementById("target");
    var textDiv = document.getElementsByClassName("text")[0];

    function resetGame() {
        location.reload();
    }

    function moveTarget() {
        let x = Math.random() * (window.innerWidth - target.clientWidth);
        let y = Math.random() * (window.innerHeight - target.clientHeight);
        target.style.position = "absolute";
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
    }

    function startTimer() {
        timer = setInterval(function () {
            sec--;
            textDiv.innerHTML = `<h3>Time Left: 00:${sec < 10 ? '0' + sec : sec}</h3>`;
            if (sec <= 0) {
                clearInterval(timer);
                gameFinished = true;
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        target.style.display = "none";
        if (score >= 60) {
            document.getElementsByClassName("text")[0].innerHTML = `<H1>Game over!<br>Your final score is: ${score}.<br>YOU'RE A GOD SIGMA! DID YOU CHEAT? Click to the button to restart.</H1> <img src="img/god.png" alt="god">`;
        } else if (score >= 50) {
            document.getElementsByClassName("text")[0].innerHTML = `<H1>Game over!<br>Your final score is: ${score}.<br>Amazing job Sigma! Click to the button to restart.</H1> <img src="img/gigachad.jpg" alt="gigachad">`;
        } else if (score >= 40) {
            document.getElementsByClassName("text")[0].innerHTML = `<H1>Game over!<br>Your final score is: ${score}.<br>Nice attempt Sigma! Click to the button to restart.</H1> <img src="img/sigma.jpg" alt="sigma">`;
        } else {
            document.getElementsByClassName("text")[0].innerHTML = `<H1>Game over!<br>Your final score is: ${score}.<br>Looks like you're a Beta. What a disappointment. Click to the button to restart.</H1> <img src="img/beta.jpg" alt="beta">`;
        }


        // Create a restart button
        document.getElementsByClassName("arst")[0].classList.remove("d-none");
        document.getElementsByClassName("game1")[0].classList.add("d-none");
        document.getElementsByClassName("game2")[0].classList.add("d-none");
        document.getElementsByClassName("game3")[0].classList.remove("d-none");
        var restartButton = document.getElementsByClassName("game3")[0].innerHTML = "Try to be Sigma again";
        restartButton.addEventListener("click", resetGame);
    }

    document.getElementsByClassName("game1")[0].addEventListener("click", (event) => {
        event.preventDefault();
        document.body.style.visibility = "hidden";
        window.location.href = "game.html";
    });

    document.getElementsByClassName("game2")[0].addEventListener("click", (event) => {
        event.preventDefault();
        document.body.style.visibility = "hidden";
        window.location.href = "game2.html";
    });

    target.addEventListener("click", (event) => {
        if (gameFinished) {
            resetGame();
            return;
        }

        if (!start) {
            document.getElementsByClassName("arst")[0].classList.add("d-none");
            textDiv.innerHTML = `<h3>Time Left: 00:30</h3>`;
            startTimer();
            moveTarget();
            start = true;
        } else {
            score++;
            moveTarget();
        }
    });
});
