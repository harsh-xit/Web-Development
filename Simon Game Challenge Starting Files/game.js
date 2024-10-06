var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];

var userClickPattern=[];

var started=false;

var level=0;

$(document).keypress(function()
{
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
    }
});

function nextSequence()
{   
    userClickPattern=[];
    level++;

    $("#level-title").text("Level "+level);

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

}

$(".btn").on("click",function()
{
    var userChosenColor=$(this).attr("id");

    userClickPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    chaeckAnswer(userClickPattern.length-1);
});

function playSound(name)
{
    var audio=new Audio('./sounds/'+name+'.mp3');
    audio.play();
}

function animatePress(currentColor)
{
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel)
{
    if(gamePattern(currentLevel)===userClickPattern(currentLevel))
    {
        if(gamePattern.length===userClickPattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startover();
    }
}

function startover()
{
    level=0;
    gamePattern=[];
    started=false;
    
}
