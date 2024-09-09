window.addEventListener("load", (event) => {
    var start = false;
    var green = false;
    var gameFinished = false;
    var timeoutId;
    var greenTime;
    var clickTime;

    function resetGame() {
        location.reload();
    }

    function setGreen() {
        green = true;
        document.body.style.backgroundColor = "rgb(75, 219, 106)";
        document.getElementsByClassName("text")[0].innerHTML = "<H1>Click Now!</H1>";
        greenTime = performance.now();
        console.log("Green time = ", greenTime)
    }

    document.getElementsByClassName("game2")[0].addEventListener("click", (event) => {
        event.preventDefault();
        document.body.style.visibility = "hidden";
        window.location.href = "game2.html"
    })

    window.addEventListener("click", (event) => {
        if (gameFinished) {
            resetGame();
            return;
        }

        if (!start) {
            document.getElementsByClassName("arst")[0].classList.add("d-none");
            document.body.style.backgroundColor = "rgb(206, 38, 54)";
            document.getElementsByClassName("text")[0].style.color = "rgb(250, 242, 227)";
            document.getElementsByClassName("text")[0].innerHTML = "<H1>Wait for your time to be a Sigma.</H1>";


            var waitTime = Math.floor(Math.random() * 5001 + 1000);
            console.log("wait time: ", waitTime)
            start = true;

            timeoutId = setTimeout(setGreen, waitTime);
        } else {
            if (!green) {
                document.getElementsByClassName("text")[0].innerHTML = "<H1>Too early sigma! Calm down!<br>Click to try again.</H1>";
                gameFinished = true;
                clearTimeout(timeoutId);
            } else {
                clickTime = performance.now();
                console.log("click time = ", clickTime);
                var reactSpeed = Math.floor(clickTime - greenTime);
                console.log("React speed: ", reactSpeed);

                if (reactSpeed < 200) {
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

