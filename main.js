let guess = document.getElementById("guess");
const guessButton = document.getElementById("guess-btn");
const resetButton = document.getElementById("reset-btn");
let message = document.getElementById("message");


let hiddenNumber = Math.floor((Math.random() * 100));
console.log(hiddenNumber);


function compareNumber(){
    let guessedNum = parseInt(guess.value);
    if(guessedNum > hiddenNumber){
        message.innerHTML = "Too High, try again..";
        message.style.color = "red";
    }
    else if (guessedNum < hiddenNumber){
        message.innerHTML = "Too Low, try again..";
        message.style.color = "red";
    }
     else{
        message.innerHTML = "Congratulations!, You guessed the secret number!";
        message.style.color = "green";
     }

};

function resetGame(){
    hiddenNumber = Math.floor((Math.random() * 100));
    console.log(hiddenNumber);
    guess.value = "";
    message.innerHTML="";
};
