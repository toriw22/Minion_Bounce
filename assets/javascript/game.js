var computerNumber = Math.floor(Math.random()*(100-50)+49);
$("#computerNumber").text(computerNumber);

var userScore = 0;
$("#userScore").text(userScore);

var wins = 0;
$("#wins").text(wins);

var losses = 0;
$("#losses").text(losses);

var minionValue1;
var minionValue2;
var minionValue3;
var minionValue4;

function startGame () {
	alert("Try to reach the \"Number to Guess\" value by clicking the minions below. Each minion has a random value from 1-10. If you go over the \"Number to Guess\", you lose!")

// calculate random values for each minion
	function randomVal() {
		var randomize = Math.floor(Math.random()*10+1);
		randomize = parseInt(randomize);
		return randomize;
	}

	minionValue1 = randomVal ();
	minionValue2 = randomVal ();
	minionValue3 = randomVal ();
	minionValue4 = randomVal ();

	userScore = 0;

	$("#userScore").text(userScore);

	computerNumber = Math.floor(Math.random()*(100-50)+49);

	$("#computerNumber").text(computerNumber);

	$("#wins").text(wins);

	$("#losses").text(losses);

}

startGame();

function keepScore (minionValue, num1, num2) { 

// adding to score
	userScore += minionValue;
	$("#userScore").text(userScore);


// adding to win/loss if player wins or looses
	if (userScore === computerNumber) {
		wins++;
		alert("You Win!! ={D");
		startGame();
	}

	else if (userScore >= computerNumber) {
		losses++;
		alert("Game over! Loser!");
		startGame();

	}

};


$("#minion1").on("click", function() {
	
	keepScore(minionValue1);
	$(this).animate({top: "510px"}, 100);	
	$(this).animate({top: "525px"}, 100);

});


$("#minion2").on("click", function() {

	keepScore(minionValue2);
	$(this).animate({top: "520px"}, 100);	
	$(this).animate({top: "535px"}, 100);	

});


$("#minion3").on("click", function() {
	
	keepScore(minionValue3);
	$(this).animate({top: "520px"}, 100);	
	$(this).animate({top: "535px"}, 100);	

});


$("#minion4").on("click", function() {
	
	keepScore(minionValue3);
	$(this).animate({top: "510px"}, 100);	
	$(this).animate({top: "525px"}, 100);	

});
