// console.log("Hello world")
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorepara = document.querySelector('#user-score'); // para means paragraph only for name
const compScorepara = document.querySelector('#comp-score'); // para means paragraph only for name

const genCompChoice = () =>{
      const options = ["rock",'paper', 'scissors'];
      const randIdx = Math.floor(Math.random() * 3);
      return options[randIdx];
}

const drawGame = () =>{
    // console.log('"Game was draw...');
    msg.innerText= 'Game was drea. Play again.';
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) =>{
      if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log('user was win...');
        msg.innerText= `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      } else{
      compScore++;
       compScorepara.innerText =compScore;
        // console.log('user was lose...');
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}` ;
        msg.style.background = 'red';
      }
}

const playGame = (userChoice)  => {
    console.log('user choice =', userChoice);
    //Generate  computer choice -> modular
    const compChoice = genCompChoice();
    // console.log('comp choice =', compChoice);
    
    if(userChoice === compChoice){
        //draw ho jaya ge game
        drawGame();  // function call drwa game print game was draw   }
    } else{
        let userWin = true;
        if(userChoice === 'rock') {
            //scissors, paper computer choice user choice rock hai conditon true : false
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper'){
            //rock , scissors choice
            userWin = compChoice === 'scissors' ? false : true; 
        } else{
            //computer choice reaming rock / paper
           userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin ,userChoice , compChoice); /// user winner calll
    }
    };


choices.forEach((choice) => {
    // console.log(choice);//choice pa click karte hai to all class(choice wali) print hota hai
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id") //get attribute(id) use karta hai to particular single choice print hota ha. for ex. : rock , paper, scissors
        // console.log('choice  was clicked',userChoice);
        playGame(userChoice);
    });   
});