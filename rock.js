function computerPlay(){
    
    let   computerChoice = Math.random();
     if (computerChoice < 0.40) {
         computerChoice = "rock";
        
     } else if(computerChoice <= 0.60) {
         computerChoice = "paper";
     } else {
         computerChoice = "scissors";
     } 
     return computerChoice.toLowerCase();
 }
 function gamePlay(){
     //let score = 0;
 
     let playerChoice = prompt("pick between rock, paper, and scissors");
     let computerChoice = computerPlay;
     console.log(singleRound(playerChoice, computerChoice()));
    // score += (singleRound(playerChoice, computerChoice()))
 
 
 
      playerChoice = prompt("pick between rock, paper, and scissors");
      computerChoice = computerPlay;
     console.log(singleRound(playerChoice, computerChoice()));
    // score += (singleRound(playerChoice, computerChoice()))
 
      playerChoice = prompt("pick between rock, paper, and scissors");
     computerChoice = computerPlay;
     console.log(singleRound(playerChoice, computerChoice()));
     //score += (singleRound(playerChoice, computerChoice()))
 
 
      playerChoice = prompt("pick between rock, paper, and scissors");
      computerChoice = computerPlay;
     console.log(singleRound(playerChoice, computerChoice()));
     //score += (singleRound(playerChoice, computerChoice()))
 
 
      playerChoice = prompt("pick between rock, paper, and scissors");
      computerChoice = computerPlay;
     console.log(singleRound(playerChoice, computerChoice()));
     //score += (singleRound(playerChoice, computerChoice()))
 }
 
 
 
   function singleRound(userChoice, computerChoice, score){
       score = 0;
       if(userChoice == computerChoice){
     console.log(score);
           return `Tie! player: ${userChoice} computer: ${computerChoice} `;
       }
       else if(userChoice == "rock" && computerChoice == "paper") {
         console.log(score);
           return `loss! player: ${userChoice} computer: ${computerChoice}`;
       }
       else if(userChoice == "paper" && computerChoice == "rock" ) {
         score++;
         console.log(score);
           return `win! player: ${userChoice} computer: ${computerChoice}`;
           }
       else if(userChoice == "scissors" && computerChoice =="rock"){
         console.log(score);
           return `loss! player: ${userChoice} computer: ${computerChoice}`;
       }
       else if(userChoice == "rock" && computerChoice == "scissors"){
         score++;
         console.log(score);
           return `win! player: ${userChoice} computer: ${computerChoice}`;
       }
       else if(userChoice == "paper" && computerChoice == "scissors"){
         console.log(score);
           return `loss! player: ${userChoice} computer: ${computerChoice}`;
       }
       else if(userChoice == "scissors" && computerChoice == "paper"){
         score++;
         console.log(score);
           return `win! player: ${userChoice} computer: ${computerChoice}`;
       }
   }
 gamePlay();