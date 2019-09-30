// Generate random number to reach (19 - 120) check
// Generate random number for each of the crystalls (1 - 12) check
// Receive the click event and sum every click associating the values from the gems check
// Check if the user equals the scores and push a win if it does and generate new values to the gems
// Check if the user passed the score value, push one to the losses and generate new values to the gems 

// This will generate the random numbers for the score to reach and the 4 gems 
var targetScore 
var ranGem 
var ranGem2 
var ranGem3 
var ranGem4 

// Variables for the crystals
var blueGem = 0;
var greenGem = 0;
var purpleGem = 0;
var redGem = 0;

//Variables for the scores
var targetScore = 0;
var currentScore = 0;
var winCount = 0;
var lossCount = 0;

//This function gets javasript running once the html is ready? 
$(document).ready(function() {

    function start() {
        //This will restart the current score, and generate random values for the target score and the values for the gems
        currentScore = 0;
        targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        blueGem =  Math.floor(Math.random() * 12) + 1;
        greenGem = Math.floor(Math.random() * 12) + 1;
        purpleGem = Math.floor(Math.random() * 12) + 1;
        redGem = Math.floor(Math.random() * 12) + 1;


        //Insert the values of the target and current score
        $("#targetScoreText").html(targetScore);
        $("#currentScoreText").html(currentScore);
        console.log("Current Score: " + currentScore)

        console.log("Target Score: " + targetScore)
        console.log("Blue: " + blueGem + " | Green " + greenGem + " | Purple " + purpleGem + " | Red : " + redGem)


    }

    function addValues(clickId) {

        if (event.currentTarget.id === "blueImg"){
            console.log(currentScore);
            console.log("I'm the blue crystal and my value now is " + blueGem);
            currentScore = currentScore + blueGem;
            console.log("Now the current score is " + currentScore);

        } else if (event.currentTarget.id === "greenImg"){
            console.log(currentScore);
            console.log("I'm the green crystal and my value now is " + greenGem);
            currentScore = currentScore + greenGem;
            console.log("Now the current score is " + currentScore);

        } else if (event.currentTarget.id === "purpleImg"){
            console.log(currentScore);
            console.log("I'm the purple crystal and my value now is " + purpleGem);
            currentScore = currentScore + purpleGem;
            console.log("Now the current score is " + currentScore);

        } else {
            console.log(currentScore);
            console.log("I'm the red crystal and my value now is " + redGem);
            currentScore = currentScore + redGem;
            console.log("Now the current score is " + currentScore);

        }
        $("#currentScoreText").html(currentScore)

        console.log("click actual score " + currentScore)
        console.log("Click id: " + event.currentTarget.id)

    }

    function roundFinisher() {
        if (currentScore === targetScore) {
            alert("Congrats! You won");
            winCount ++;
            $("#winText").html(winCount);
            start();

        } else if (currentScore > targetScore) {
            alert("Damn, you lost!");
            lossCount++;
            $("#lossText").html(lossCount);
            start();
        }
    }


    start();
    
    $("#blueImg").click( function(event) {
        addValues();
        // console.log(event)
        // console.log(event.currentTarget.id)
        roundFinisher();
    });

    $("#greenImg").click( function() {
        addValues();
        roundFinisher();
    });

    $("#purpleImg").click( function() {
        addValues();
        roundFinisher();
    });

    $("#redImg").click( function() {
        addValues();
        roundFinisher();
    })

});
