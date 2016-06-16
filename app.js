'use strict';

// using a function to start the process when the button is clicked
function startGame() {

// Greeting the user
  // var userName = prompt('Greetings!!! What is your name?');
  // alert('Welcome ' + userName + ', glad you\'re here! \nI have a short quiz about me for you to complete.');
  // var correctTally = 0;

// Strech Goal - creating arrays for Questions, Answers, & Responses
  // var questionsArray = [
  //   'Do I have a dog?',
  //   'Have I been to New York City?',
  //   'Do I love jello?',
  //   'Have I ever parachuted before?',
  //   'Do I enjoy pancakes?'];
  //
  // var answersArray = ['yes','yes','no','no','yes'];
  //
  // var responsesTrueArray = [
  //   'Right! Her name is Lucy.',
  //   'Correct! I visted New York City once!',
  //   'Correct! Jello is NOT real food, and I DO NOT like it.',
  //   'Right! I play it safe everyday.',
  //   'Of Course! Doesn\'t everyone love pancakes!'];
  //
  // var responsesFalseArray = [
  //   'WRONG - I actually do have a dog.',
  //   'Wrong! - I actually HAVE been to New York City.',
  //   'Wrong!!! No way, I can\'t stand jello.',
  //   'Wrong! I would never jump out of an airplane.',
  //   'You are wrong! Pancakes are the best.'];
  //
  // var responsesArray = [responsesTrueArray, responsesFalseArray];
  // var hugeMultiArray = [questionsArray, answersArray, responsesArray];

//Stech Goal - code to compare responses with the answers and give result
  // for( var i = 0; i < questionsArray.length; i++){
  //   var answerA = prompt(questionsArray[i]).toLowerCase();
  //   var answerAFirst = answerA.substring(0,1);
  //   if(answerA === answersArray[i] || answerAFirst === answersArray[i].substring(0,1)){
  //     alert(responsesArray[0][i]);
  //     correctTally++;
  //   }
  //   else {
  //     alert(responsesArray[1][i]);
  //   }
  // }

// //Questestions 1 - 5
  // var answer1 = prompt('Do I have a dog?').toLowerCase();
  // if(answer1 === 'yes' || answer1 === 'y') {
  //   alert('Right! Her name is Lucy.');
  //   correctTally++;
  // }
  // else{
  //   alert('WRONG - I actually do have a dog.');
  // }
  //
  // var answer2 = prompt('Have I been to New York City?').toLowerCase();
  // if(answer2 === 'yes' || answer2 === 'y') {
  //   alert('Correct! I visted New York City once!');
  //   correctTally++;
  // }
  // else{
  //   alert('Wrong! - I actually HAVE been to New York City.');
  // }
  //
  // var answer3 = prompt('Do I love jello?').toLowerCase();
  // if(answer3 === 'yes' || answer3 === 'y') {
  //   alert('Wrong!!! No way, I can\'t stand jello.');
  // }
  // else{
  //   alert('Correct! Jello is NOT real food, and I DO NOT like it.');
  //   correctTally++;
  // }
  //
  // var answer4 = prompt('Have I ever parachuted before?').toLowerCase();
  // if(answer4 === 'yes' || answer4 === 'y'){
  //   alert('Wrong! I would never jump out of an airplane.');
  // }
  // else{
  //   alert('Right! I play it safe everyday.');
  //   correctTally++;
  // }
  //
  // var answer5 = prompt('Do I enjoy pancakes?').toLowerCase();
  // if(answer5 === 'yes' || answer5 === 'y') {
  //   alert('Of Course! Doesn\'t everyone love pancakes!');
  //   correctTally++;
  // }
  // else{
  //   alert('You are wrong! Pancakes are the best.');
  // }

// Question 6 guessing number game
  var correctNumber = 2;
  var i = 0;
  var tryLeft = 4 - i;
  var userGuess = (prompt('You have 4 attempts to guess a number between 1 and 10. \n \n GO FOR IT!'));
  var userGuessInt = parseInt(userGuess);  // convert entry to a number so we can evaluate it.
  var userCorrect = 0;
  while(i < 4){
    console.log(userGuess);
    if(userGuessInt < 1 || userGuessInt > 10){
      userGuess = prompt('Outside of the range: \n \n Please enter a number between 1 and 10. \n(attemps remaining: ' + tryLeft + ')');
      userGuessInt = parseInt(userGuess);
    }
    else if( Number.isInteger(parseFloat(userGuess)) !== true ){
      userGuess = prompt('Not an interger.\n \nPlease enter a number between 1 and 10.\n(attemps remaining: ' + tryLeft + ')');
      userGuessInt = parseInt(userGuess);
    }
    else if( (userGuessInt < correctNumber) && (i < 3) ){
      tryLeft--;
      userGuess = prompt('Sorry, that number is too LOW.\n \nPlease enter another number between 1 and 10.\n(attemps remaining: ' + tryLeft + ')');
      userGuessInt = parseInt(userGuess);
      i++;
    }
    else if( (userGuessInt > correctNumber) && (i < 3) ){
      tryLeft--;
      userGuess = prompt('Sorry, that number is too HIGH.\n \nPlease enter another number between 1 and 10.\n(attemps remaining: ' + tryLeft + ')' );
      userGuessInt = parseInt(userGuess);
      i++;
    }
    else if (userGuessInt === correctNumber){
      alert('That is so awesomwe! You got it RIGHT!');
      correctTally++;
      i = 6;
      userCorrect = 1; //update so we don't display the correct number later.
    }
    else{
      i++;
    }
  }
  if(userCorrect === 0){
    alert('Sorry, but the correct number was ' + correctNumber);
  }

  // Question 7 guess Beers

  // var myBeers = ['Firestone','Fat Tire','Blue Moon'];
  // var myBeersLower = ['firestone', 'fat tire', 'blue moon'];
  // var myBeersSpace = ['Firestone',' Fat Tire',' Blue Moon'];
  // var response = prompt('You have 6 attempts to guess my 3 favorite beers \n \n GO FOR IT!').toLowerCase();
  // var counter = 1;
  // var favBeer = 0;
  // var trysLeft = 5;
  // for( var counter = 1 ; counter <= 6; counter++){
  //   for( var i = 0; i < myBeers.length; i++ ){
  //     if(response === myBeersLower[i] ){
  //       var favBeerNumb = i;
  //       var rightBeer = 1;
  //     }
  //     else{
  //       favBeer = 0;
  //     }
  //   }
  //   if(rightBeer === 1){
  //     alert('Correct: ' + myBeers[favBeerNumb] + ' is one of my favorite beers. \n \n My favorite beers are: ' + myBeersSpace);
  //     counter = 7;
  //     correctTally++;
  //   }
  //   else if(favBeer === 0 && counter < 6){
  //     if(counter < 5){ // need a simple if stmt to change between "tries" and "try"
  //       var tries = 'tries';
  //     }
  //     else{
  //       var tries = 'try';
  //     }
  //     response = prompt('Sorry that was NOT one of my favorite beers.\n\n you have: ' + trysLeft + ' ' + tries + ' left').toLowerCase();
  //   }
  //   else if(favBeer === 0 && counter >= 6){
  //     alert('Sorry, that was NOT one of my favorite beers.\n\n My favorite beers are ACTUALLY\n\n' + myBeersSpace );
  //   }
  //   trysLeft = trysLeft - 1;
  // }

// CorrectTally counter

  var correctTallyPer = ( (correctTally / 7) * 100);
  var correctTallyPerInt = parseInt(correctTallyPer);
  alert('Congrats! you got ' + correctTally + ' out of 7 questions. \n \n That is an amazing ' + correctTallyPerInt + '%' );
}
