for(var i=0;i<7;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonInnerHTML=this.innerHTML;

    handClick(buttonInnerHTML);
});
}

document.addEventListener("keydown", function(event)
{
handClick(event.key);
})
function handClick(press)
{
    

    switch(press)
    {
        case "w":
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
        case "a":
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
        case "s":
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
        case "d":
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
        case "j":
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
        case "k":
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
        case "l":
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
        break;

        default:
            console.log(button);
    }
}
