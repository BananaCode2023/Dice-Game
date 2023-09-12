
function diceButton(){
  let dice1 = Math.random();
  let dice2 = Math.random();
  let image1 = document.getElementById("dice1")
  let image2 = document.getElementById("dice2")

  //for player 1 dice
  if (dice1 < 0.165){
    image1.setAttribute("src", "player1dice1.png")

    dice1 = 1;
  }
  else if(dice1 < 0.33 && dice1 > 0.165 ){
    image1.setAttribute("src", "player1dice2.png")

    dice1 = 2;
  }
  else if(dice1 < 0.495 && dice1 > 0.33 ){
    image1.setAttribute("src", "player1dice3.png")
    
    dice1 = 3;
  }
  else if(dice1 < 0.66 && dice1 > 0.495 ){
    image1.setAttribute("src", "player1dice4.png")

    dice1 = 4;
  }
  else if(dice1 < 0.825 && dice1 > 0.66 ){
    image1.setAttribute("src", "player1dice5.png")

    dice1 = 5;
  }
  else if(dice1 < 0.99 && dice1 > 0.825 ){
    image1.setAttribute("src", "player1dice6.png")

    dice1 = 6;
  }

  //for player 2 dice
  if (dice2 < 0.165){
    image2.setAttribute("src", "player2dice1.png")

    dice2 = 1;
  }
  else if(dice2 < 0.33 && dice2 > 0.165 ){
    image2.setAttribute("src", "player2dice2.png")

    dice2 = 2;
  }
  else if(dice2 < 0.495 && dice2 > 0.33 ){
    image2.setAttribute("src", "player2dice3.png")
    
    dice2 = 3;
  }
  else if(dice2 < 0.66 && dice2 > 0.495 ){
    image2.setAttribute("src", "player2dice4.png")

    dice2 = 4;
  }
  else if(dice2 < 0.825 && dice2 > 0.66 ){
    image2.setAttribute("src", "player2dice5.png")

    dice2 = 5;
  }
  else if(dice2 < 0.99 && dice2 > 0.825 ){
    image2.setAttribute("src", "player2dice6.png")

    dice2 = 6;
  }

  //result
  let render = document.getElementById("renderResult");
  let bet = document.getElementById("bet");

  if(dice1 > dice2){
    render.innerHTML = `<h1>Player 1 WINS <u>${bet.value*2}PHP</u>!</h1>`
  }
  else{
    render.innerHTML = `<h1>Player 2 WINS <u>${bet.value*2}PHP</u>!</h1>`
  }

}