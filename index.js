//___ game var ______
let randomNumber = Math.floor(Math.random()*100)+1
const input = document.querySelector("#input-el");
const submitBtn = document.querySelector("#submit-btn");
const preGuess = document.querySelector("#preguess-el")
const turnRem = document.querySelector("#turnsrem-el")
const rightOrWrong = document.querySelector("#rightorwrong-el");
const NewGameBtn = document.querySelector("#newgame-btn");

NewGameBtn.disabled = true;
let guesscount = 1;

  //______ game functions _____

function checkGuess(){
    const inputValue = Number(input.value);
    if (guesscount === 1){
        preGuess.textContent = "Previos Guesses : "
    }
    const preInputValue = inputValue
    // __game algo ____
    if (inputValue < 101 && inputValue > 0  ){
        if (inputValue === randomNumber){
            rightOrWrong.textContent = "Congats You Have WON!";
            rightOrWrong.style.backgroundColor = "green";
            turnRem.textContent = "";
            preGuess.textContent = "";
            disableBtn();
        }else if (guesscount === 10){
            turnRem.textContent = "You Are Out Of Turns";
            turnRem.style.backgroundColor = "red";
            disableBtn();
        }else {
            preGuess.textContent += ` ${inputValue} - `;
            if (inputValue < randomNumber){
                rightOrWrong.textContent = "WRONG!, TOO LOW ";
                rightOrWrong.style.backgroundColor = "red";
            }else if (inputValue > randomNumber){
                rightOrWrong.textContent = "WRONG!, TOO HIGH ";
                rightOrWrong.style.backgroundColor = "red";
            }
            turnRem.textContent = `Turns Remaning : ${10-guesscount}`;
        }
    }else {
        alert("invalid input pick between 1 and 100")
    }
    guesscount ++;
}

function disableBtn(){
        submitBtn.disabled = true;
        input.disabled = true;
        NewGameBtn.disabled = false;
}

function resetGame(){
    guesscount = 1 ;
    randomNumber = Math.floor(Math.random()*100)+1
    submitBtn.disabled = false;
    input.disabled = false;
    preGuess.textContent = "";
    rightOrWrong.textContent = "";
    turnRem.textContent = "";
    turnRem.style.backgroundColor = "#007272"
    rightOrWrong.style.backgroundColor = "#007272"
}

//____ event listeners_____________

submitBtn.addEventListener("click" ,checkGuess);
NewGameBtn.addEventListener("click", resetGame);

