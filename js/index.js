'use strict';

(function(){

  var params = {
    output: document.getElementById('greeter-output'),
    result: document.getElementById('result'),
    newGame: document.getElementById('new-game'),
    gameInfo: document.getElementById('game-info'),
    playerChoice: null,
    computerChoice: null,
    possibleChoices: ['paper', 'rock', 'scissors'],
    playerScore: 0,
    computerScore: 0,
    pointsToWon: null,
    buttons: document.querySelectorAll('.player-move'),
  }
  
  
  
  
  
  
  
  var playerMove = function(choice){
    return params.playerChoice = choice;
  }

  var allButtons = function(){
    for (var i = 0; i < params.buttons.length; i++){
      params.buttons[i].addEventListener('click', function(){
        shortCut(this.getAttribute('data-move'));
      });
    }
  }
  
  var computerMove = function(){
    var index = Math.floor(Math.random() * 3);
    return params.computerChoice = params.possibleChoices[index];
  }
      
  var compareChoices = function(){
    if (params.playerChoice === params.computerChoice){
      params.output.innerHTML = 'You choose ' + params.playerChoice + ' , computer choose ' + params.computerChoice + ' . REMIS !!!';
    }
    if ((params.playerChoice === 'paper' && params.computerChoice === 'rock') || (params.playerChoice === 'rock' && params.computerChoice === 'scissors') || (params.playerChoice === 'scissors' && params.computerChoice === 'paper')){
      params.output.innerHTML = 'You choose ' + params.playerChoice + ' , computer choose ' + params.computerChoice + ' . You won !!!';
    }
    if ((params.playerChoice === 'paper' && params.computerChoice === 'scissors') || (params.playerChoice === 'rock' && params.computerChoice === 'paper') || (params.playerChoice === 'scissors' && params.computerChoice === 'rock')){
      'You choose ' + params.playerChoice + ' , computer choose ' + params.computerChoice + ' . You loose !!!';
    }
  }
    
  var score = function(){
    if ((params.playerChoice === 'paper' && params.computerChoice === 'rock') || (params.playerChoice === 'rock' && params.computerChoice === 'scissors') || (params.playerChoice === 'scissors' && params.computerChoice === 'paper')){
      params.playerScore++;
      return params.result.innerHTML = 'SCORE: ' + params.playerScore + ' to ' + params.computerScore;
    }
    if ((params.playerChoice === 'paper' && params.computerChoice === 'scissors') || (params.playerChoice === 'rock' && params.computerChoice === 'paper') || (params.playerChoice === 'scissors' && params.computerChoice === 'rock')){
      params.computerScore++;
      return params.result.innerHTML = 'SCORE: ' + params.playerScore + ' to ' + params.computerScore;
    }
  }
  
  var gameOver = function(){
    if (params.playerScore === params.pointsToWon){
      toggleButtons();
      return params.gameInfo.innerHTML = 'YOU ARE WINNER !!! SCORE: ' + params.playerScore + ' to ' + params.computerScore + '<br>' + 'Click NEW GAME';
    }
    if (params.computerScore === params.pointsToWon){
      toggleButtons();
      return params.gameInfo.innerHTML = 'YOU ARE LOOSER !!! SCORE: ' + params.playerScore + ' to ' + params.computerScore + '<br>' + 'Click NEW GAME';
    }
    return params.gameInfo.innerHTML = 'This game has a ' + params.pointsToWon + ' rounds';
  }
  
  var toggleButtons = function(){
    for (var i = 0; i < params.buttons.length; i++){
      params.buttons[i].disabled = !params.buttons[i].disabled;
    }
   }
  
  var resetPoints = function(){
    params.pointsToWon = null;
    params.playerScore = 0;
    params.computerScore = 0;
  }
  
  var resetText = function(){
    params.output.innerHTML = '';
    params.result.innerHTML = '';
  }
  
  allButtons();

  params.newGame.addEventListener('click', function(){
    resetPoints();
    toggleButtons();
    params.pointsToWon = parseInt(window.prompt('How many rounds do you want to play?'));
    resetText();
    gameOver();
  });
    
  var shortCut = function(choice){
    playerMove(choice);
    computerMove();
    compareChoices();
    score();
    gameOver();
  }
  
  toggleButtons();
  
})();