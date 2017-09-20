var computerNumber = Math.floor(Math.random()*(100-50)+49);

$("#computerNumber").text(computerNumber);

var userScore = 0;

$("#userScore").text(userScore);

var userOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var wins = 0;

$("#wins").text(wins);

var losses = 0;

$("#losses").text(losses);


function startGame () {
	alert("Try to reach the \"Number to Guess\" value by clicking the minions below. Each minion has a random value from 1-10. If you go over the \"Number to Guess\", you lose!")
	minionValue1 = Math.floor(Math.random()*10+1);
	$(this).attr("minionValue1");
	minionValue1 = parseInt(minionValue1);

	minionValue2 = Math.floor(Math.random()*10+1);
	$(this).attr("minionValue2");
	minionValue2 = parseInt(minionValue2);

	minionValue3 = Math.floor(Math.random()*10+1);
	$(this).attr("minionValue3");
	minionValue3 = parseInt(minionValue3);

	minionValue4 = Math.floor(Math.random()*10+1);
	$(this).attr("minionValue4");
	minionValue4 = parseInt(minionValue4);

	userScore = 0;

	$("#userScore").text(userScore);

	computerNumber = Math.floor(Math.random()*(100-50)+49);

	$("#computerNumber").text(computerNumber);

	$("#wins").text(wins);

	$("#losses").text(losses);


}

startGame();



$("#minion1").on("click", function() {

	userScore += minionValue1;

	$("#userScore").text(userScore);

	$(this).animate({top: "510px"}, 100);	
	$(this).animate({top: "525px"}, 100);	

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


});

$("#minion2").on("click", function() {

	userScore += minionValue2;

	$("#userScore").text(userScore);

	$(this).animate({top: "520px"}, 100);	
	$(this).animate({top: "535px"}, 100);	

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


});

$("#minion3").on("click", function() {

	userScore += minionValue3;

	$("#userScore").text(userScore);

	$(this).animate({top: "520px"}, 100);	
	$(this).animate({top: "535px"}, 100);	

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



});

$("#minion4").on("click", function() {

	userScore += minionValue4;

	$("#userScore").text(userScore);

	$(this).animate({top: "510px"}, 100);	
	$(this).animate({top: "525px"}, 100);	

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

});
