
function playAudio() {
    var audio = document.getElementById("speenSound");
    if(audio){
        audio.play()
        .then(function(){
            setTimeout(function(){
                window.location.href = "game.html";
            }, 2000);
        }).catch(function(error){
            console.error("Playback failed: ", error);
            window.location.href = "game.html";
        });
    }else{
        console.error("Audio element not found");
        window.location.href = "game.html";
    }
}
