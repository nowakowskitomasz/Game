'use strict';

(function(){
  
  var output = document.getElementById('greeter-output');
  var paper = document.getElementById('greeter-button1');
  var rock = document.getElementById('greeter-button2');
  var scissors = document.getElementById('greeter-button3');
  var result = document.getElementById('result');
  var newGame = document.getElementById('new-game');
  var gameInfo = document.getElementById('game-info');
  var playerChoice;
  var computerChoice;
  var possibleChoices = ['paper', 'rock', 'scissors'];
  var playerScore = 0;
  var computerScore = 0;
  var pointsToWon;
  
  var playerMove = function(choice){
    return playerChoice = choice;
  }
  
  var computerMove = function(){
    var index = Math.floor(Math.random() * 3);
    return computerChoice = possibleChoices[index];
  }
      
  var compareChoices = function(){
    if (playerChoice === computerChoice){
      output.innerHTML = 'You choose ' + playerChoice + ' , computer choose ' + computerChoice + ' . REMIS !!!';
    }
    if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper')){
      output.innerHTML = 'You choose ' + playerChoice + ' , computer choose ' + computerChoice + ' . You won !!!';
    }
    if ((playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'scissors' && computerChoice === 'rock')){
      'You choose ' + playerChoice + ' , computer choose ' + computerChoice + ' . You loose !!!';
    }
  }
    
  var score = function(){
    if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper')){
      playerScore++;
      return result.innerHTML = 'SCORE: ' + playerScore + ' to ' + computerScore;
    }
    if ((playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'scissors' && computerChoice === 'rock')){
      computerScore++;
      return result.innerHTML = 'SCORE: ' + playerScore + ' to ' + computerScore;
    }
  }
  
  var gameOver = function(){
    if (playerScore === pointsToWon){
      toggleButtons();
      return gameInfo.innerHTML = 'YOU ARE WINNER !!! SCORE: ' + playerScore + ' to ' + computerScore + '<br>' + 'Click NEW GAME';
    }
    if (computerScore === pointsToWon){
      toggleButtons();
      return gameInfo.innerHTML = 'YOU ARE LOOSER !!! SCORE: ' + playerScore + ' to ' + computerScore + '<br>' + 'Click NEW GAME';
    }
    return gameInfo.innerHTML = 'This game has a ' + pointsToWon + ' rounds';
  }
  
  var toggleButtons = function(){
    paper.disabled = !paper.disabled;
    rock.disabled = !rock.disabled;
    scissors.disabled = !scissors.disabled;
  } 
  
  var resetPoints = function(){
    pointsToWon = null;
    playerScore = 0;
    computerScore = 0;
  }
  
  var resetText = function(){
    output.innerHTML = '';
    result.innerHTML = '';
  }
  
  newGame.addEventListener('click', function(){
    resetPoints();
    toggleButtons();
    pointsToWon = parseInt(window.prompt('How many rounds do you want to play?'));
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
  
  paper.addEventListener('click', function(){
    shortCut('paper');
  });
  
  rock.addEventListener('click', function(){
    shortCut('rock');
  });
  
  scissors.addEventListener('click', function(){
    shortCut('scissors');
  });
  
  toggleButtons();
  
})();