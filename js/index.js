'use strict';

(function(){
  
  var params = {
    var output = document.getElementById('greeter-output'),
    var paper = document.getElementById('greeter-button1'),
    var rock = document.getElementById('greeter-button2'),
    var scissors = document.getElementById('greeter-button3'),
    var result = document.getElementById('result'),
    var newGame = document.getElementById('new-game'),
    var gameInfo = document.getElementById('game-info'),
    var playerChoice,
    var computerChoice,
    var possibleChoices = ['paper', 'rock', 'scissors'],
    var playerScore = 0,
    var computerScore = 0,
    var pointsToWon,
  }
  
  var playerMove = function(choice){
    return params.playerChoice = choice;
  }
  
  '''
  var allButtons = function(){
    var buttons = document.querySellectorAll('.player-move');
    for(var i = 0; i < buttons.length; i++){
      var paper = greeter-button1.getAttribute('data-move');
      var rock = greeter-button2.getAttribute('data-move');
      var scissors = greeter-button3.getAttribute('data-move');
      playerMove(data-move);
    }
  }
  '''

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
    params.paper.disabled = !params.paper.disabled;
    params.rock.disabled = !params.rock.disabled;
    params.scissors.disabled = !params.scissors.disabled;
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
  
  params.paper.addEventListener('click', function(){
    shortCut('paper');
  });
  
  params.rock.addEventListener('click', function(){
    shortCut('rock');
  });
  
  params.scissors.addEventListener('click', function(){
    shortCut('scissors');
  });
  
  toggleButtons();
  
})();