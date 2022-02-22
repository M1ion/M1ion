var audio = new Audio('img-sound/happy.mp3');   

$("#footer-btn").on("click", function(){
    audio.play();
});

$("#footer-btn").on("mouseover", function(){
        audio.pause();
});