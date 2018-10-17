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
    modals: document.querySelectorAll('.modal'),
    modalsLength: modals.length,
    closeButtons: document.querySelectorAll('.modal .close'),
    closeButtonsLength: closeButtons.length,

  }
  
  var showModal = function(event){
		event.preventDefault();
    for (var i = 0; i < params.modalsLength; i++){
      params.modals[i].classList.remove('show');      
    }
    console.log(event.target.hash);
    document.querySelector(event.target.hash).classList.add('show');
		document.querySelector('#modal-overlay').classList.add('show');
	};
	
	var hideModal = function(event){
		event.preventDefault();
    event.stopPropagation();
    console.log(event, this);
    if (this == event.target){
      document.querySelector('#modal-overlay').classList.remove('show');
    }
	};
	
	for (var i = 0; i < params.closeButtonsLength; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);

  var playerMove = function(choice){
    return params.playerChoice = choice;
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
    showModal();
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
  
  var allButtons = function(){
    for (var i = 0; i < params.buttons.length; i++){
      params.buttons[i].addEventListener('click', function(){
        shortCut(this.getAttribute('data-move'));
      });
    }
  }
  
  var shortCut = function(choice){
    playerMove(choice);
    computerMove();
    compareChoices();
    score();
    gameOver();
  }

  

  allButtons();

  params.newGame.addEventListener('click', function(){
    resetPoints();
    toggleButtons();
    params.pointsToWon = parseInt(window.prompt('How many rounds do you want to play?'));
    resetText();
    gameOver();
  });
  
  toggleButtons();
  
})();