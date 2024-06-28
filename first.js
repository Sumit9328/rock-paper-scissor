let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");



const genCompChoice = () => {
const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
}


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);
};


choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
     //console.log("choice was clicked", userChoice);
     playGame(userChoice);
    });
});