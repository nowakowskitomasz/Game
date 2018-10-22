'use strict';

(function(){

  var params = {
    output: document.getElementById('greeter-output'),
    result: document.getElementById('result'),
    newGame: document.getElementById('new-game'),
    gameInfo: document.getElementById('game-info'),
    modalOne: document.getElementById('modal-one'),
    modalContent: document.querySelector('.content'),
    playerChoice: null,
    computerChoice: null,
    possibleChoices: ['paper', 'rock', 'scissors'],
    playerScore: 0,
    computerScore: 0,
    pointsToWon: null,
    buttons: document.querySelectorAll('.player-move'),
    array: [],
    roundNumber: 0,
  }  
  
  var playerMove = function(choice){
    params.roundNumber++;
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
    console.log(params.array);
    var result = {
      playerChoice: params.playerChoice,
      computerChoice: params.computerChoice,
      roundScore: null,
      roundNumber: params.roundNumber,
    };
    if ((params.playerChoice === 'paper' && params.computerChoice === 'rock') || (params.playerChoice === 'rock' && params.computerChoice === 'scissors') || (params.playerChoice === 'scissors' && params.computerChoice === 'paper')){
      params.playerScore++;
      result.roundScore = params.playerScore + ":" + params.computerScore;
      params.array.push(result);
      return params.result.innerHTML = 'SCORE: ' + params.playerScore + ' to ' + params.computerScore;
    }
    if ((params.playerChoice === 'paper' && params.computerChoice === 'scissors') || (params.playerChoice === 'rock' && params.computerChoice === 'paper') || (params.playerChoice === 'scissors' && params.computerChoice === 'rock')){
      params.computerScore++;
      result.roundScore = params.playerScore + ":" + params.computerScore;
      params.array.push(result);
      return params.result.innerHTML = 'SCORE: ' + params.playerScore + ' to ' + params.computerScore;
    }
    result.roundScore = params.playerScore + ":" + params.computerScore;
    params.array.push(result);
  }
  
  var gameOver = function(){
    // toggleButtons();
    var table = document.createElement('table');
    for (var i = 0; i < params.array.length; i++){
      var tr = document.createElement('tr');
      var tdPlayerScore = document.createElement('td');
      tdPlayerScore.innerHTML = params.array[i].playerChoice;
      console.log(tdPlayerScore);
      tr.appendChild(tdPlayerScore);
      table.appendChild(tr);
      console.log(table);
    }
    params.modalContent.appendChild(table);
    if (params.playerScore === params.pointsToWon || params.computerScore === params.pointsToWon){
      toggleButtons();
      showModal();
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
  
  var allButtons = function(){
    for (var i = 0; i < params.buttons.length; i++){
      params.buttons[i].addEventListener('click', function(){
        shortCut(this.getAttribute('data-move'));
      });
    }
  }
  
  var showModal = function(){
    document.querySelector('#modal-overlay').classList.add('show');
  }

  var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}

  allButtons();

  params.newGame.addEventListener('click', function(){
    resetPoints();
    toggleButtons();
    params.pointsToWon = parseInt(window.prompt('How many rounds do you want to play?'));
    resetText();
    
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