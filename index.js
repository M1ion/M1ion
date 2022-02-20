var n = document.getElementsByClassName("responsibilities").length;
for (var i=0; i<n; i++){
    if(i%2==0){
        document.querySelectorAll(".list-group-item")[i].style.color = "#fffafa";
        document.querySelectorAll(".list-group-item")[i].style.fontSize = "20";
        document.querySelectorAll(".list-group-item")[i].style.fontWeight = "medium";
    }
}
$("#in-top-container").mouseenter(function(){
    $("#in-top-container").css("color", "rgb(200,200,220)");
})

$("#in-top-container").mouseleave(function(){
    $("#in-top-container").css("color", "#fff");
});

document.addEventListener("keypress", function(event){
    console.log(event.key);
    switch(event.key){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();   
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();   
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();  
            break; 
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play(); 
            break;   
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();  
            break; 
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play(); 
            break; 
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();  
            break;
        default: console.log(this.innerHTML);    
    }
});