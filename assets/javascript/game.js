// Generate random number to reach (19 - 120) check
// Generate random number for each of the crystalls (1 - 12) check
// Receive the click event and sum every click associating the values from the gems
// Check if the user equals the scores and push a win if it does and generate new values to the gems
// Check if the user passed the score value, push one to the losses and generate new values to the gems 

// This will generate the random numbers for the score to reach and the 4 gems 
var ranScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var ranGem =   Math.floor(Math.random() * 12) + 1;
var ranGem2 =   Math.floor(Math.random() * 12) + 1;
var ranGem3 =   Math.floor(Math.random() * 12) + 1;
var ranGem4 =   Math.floor(Math.random() * 12) + 1;

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
        targetScore = ranScore;
        blueGem = ranGem;
        greenGem = ranGem2;
        purpleGem = ranGem3;
        redGem = ranGem4;


        //Insert the values of the target and current score
        $("#targetScoreText").html(targetScore);
        $("#currentScoreText").html(currentScore);
        console.log("Current Score: " + currentScore)

        console.log("Target Score: " + targetScore)
        console.log("Blue: " + blueGem + " | Green " + greenGem + " | Purple " + purpleGem + " | Red : " + redGem)


    }

    function addValues(clickId) {

        if (event.currentTarget.id === "blueImg"){
            console.log("I'm the blue crystal and my value now is " + blueGem;
        } else if (event.currentTarget.id === "greenImg"){
            console.log("I'm the green crystal and my value now is " + greenGem);
        } else if (event.currentTarget.id === "purpleImg"){
            console.log("I'm the purple crystal and my value now is " + purpleGem);
        } else {
            console.log("I'm the red crystal and my value now is " + redGem);
        }

        console.log("Click id: " + event.currentTarget.id)

    }


    start();
    
    $("#blueImg").click( function(event) {
        alert("I'm the blue crystal");
        addValues();
        // console.log(event)
        // console.log(event.currentTarget.id)
    });

    $("#greenImg").click( function() {
        alert("I'm the green crsytal");
        addValues()
    });

    $("#purpleImg").click( function() {
        alert("I'm the purple crystal");
        addValues()
    });

    $("#redImg").click( function() {
        alert("I'm the red crystal")
        addValues()
    })

});
