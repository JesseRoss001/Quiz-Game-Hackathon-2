import  {easyGameQuestions}from "./questionbank2.js";
import  {mediumGameQuestions}from "./questionbank2.js";
import  {hardGameQuestions}from "./questionbank2.js";


function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

const selectedDifficulty =getURLParameter('difficulty')
selectedDifficulty(selectedDifficulty);


let currentQuestionArray ;

const setDifficulty = difficulty => {
    switch(difficulty) {
    case 'easy' : currentQuestionArray = easyGameQuestions;
    break;
    case 'medium' : currentQuestionArray = mediumGameQuestions;
    break;
    case 'hard' : currentQuestionArray =hardGameQuestions;
    default :
    currentQuestionArray =easyGameQuestions;
}
}

setDifficulty(document.getElementById("difficulty").value);
const onScreenQuestion = document.getElementById("question-space");
const onScreenAnswerA = document.getElementById("A-text");
const onScreenAnswerB = document.getElementById("B-text");
const onScreenAnswerC = document.getElementById("C-text");
const onScreenAnswerD = document.getElementById("D-text");
const cashOut = document.getElementById("cash-out");
const timerElement = document.getElementById("timer");
const winning1 = document.getElementById("question1");

const phoneFriend = document.getElementById("phoneafriend");
const asktheAudience = document.getElementById("askAudience");
const fiftyfifty = document.getElementById("fifty-fifty");


/* variable for game*/
let time = 30
let currentWinnings = 0
let answer = "";
let currentIndex = -1
const maxQuestions = 15
let lifelines = {
    askAudience: 1,
    phoneAFriend: 1,
    fiftyFifty: 1,
};


let winnings = [
    "£100",
    "£200",
    "£300",
    "£500",
    "£1,000",
    "£2,000",
    "£4,000",
    "£8,000",
    "£16,000",
    "£32,000",
    "£64,000",
    "£125,000",
    "£250,000",
    "£500,000",
    "£1,000,000"
];

winning1.innerText = "£0"


/* ================ Sounds for game ============= */

const ringBell = new Audio("../sounds/BoxingBell.mp3")
ringBell.volume = 0.2;

/* =============== Setting up timer element for game =============== */
document.addEventListener("DomLoaded", timer)
function timer() {
    timerElement.innerText = time;

    const timerInterval = setInterval(function () {
        time -= 1;
        timerElement.innerText = time;

        if (time <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

/* =================Setting up prize section to auto update =============  */

for(let i = 0; i < winnings.length; i++){
    winning1.textcontent += winnings[i]
}

document.addEventListener("click", handleClick)

/* =============== Selects the random question from bank ===============*/

const questionsArrayLength = currentQuestionArray.length

/**
 * Select a random number from the item passed into it
 * param must be an array.
 */
const randomQuestionGenerator = randomNumber => {
    const questionNumber = Math.floor(Math.random() * randomNumber)
    return currentQuestionArray[questionNumber]
}

let selectedQuestion = randomQuestionGenerator(questionsArrayLength)

/* =================== Main Game Loop Start ================ */

/**
 * Initialises the main gameplay loop.
 */
function gameStart() {

    askQuestion(selectedQuestion)
}

/* ============= Displays Question ==================*/

/**
 * Unpacks selected question object to display to screen
 */
const askQuestion = question => {
    
    let currentAnswer = "";
    onScreenQuestion.innerText = question.questionContent;
    onScreenAnswerA.innerText = `A: ${question.updateA}`;
    onScreenAnswerB.innerText = `B: ${question.updateB}`;
    onScreenAnswerC.innerText = `C: ${question.updateC}`;
    onScreenAnswerD.innerText = `D: ${question.updateD}`;
    currentAnswer = question.correctAnswer;
    answer = currentAnswer;
}

/* ============Takes in player click to decide next action ============ 

This check to see in order:
-if click matches answer
    -if the max amount of money earnable has been hit
-check if a lifeline has been selected
- prevents other inputs from causing issues found in testing.
-prints winnings and gameover functionality

=====================================================================*/


function handleClick(event) {
    const playerInput = event.target.innerText[0];
    console.log(playerInput)
    if(playerInput === answer){
        console.log("correct")
        updateWinnings()
        selectedQuestion = randomQuestionGenerator(questionsArrayLength)
        time = 30
        askQuestion(selectedQuestion)

        if(maxQuestions < currentIndex){
            onScreenQuestion.innerText = `Congratulations. You walk away with ${winnings[currentIndex]}!`
            gameOver() 
        }

    } else if (playerInput === phoneFriend && lifelines.phoneAFriendAvailable > 0){
        phoneAFriend()
    } else if (playerInput === asktheAudience && lifelines.askTheAudienceAvailable > 0){
        askAudience()
    } else if(playerInput === fiftyfifty && lifelines.fiftyFifty > 0) {
        fiftyFifty()
    }else if(playerInput === cashOut) {
        onScreenQuestion.innerText = `Congratulations. You walk away with ${winnings[currentIndex]}!`
        gameOver()
    } else if (playerInput === "P" || playerInput === "W" || playerInput === "T" || playerInput === undefined) {
        /* This is to prevent unexpected activity */
        console.log("try again")
    } else {
        if(currentIndex == -1){
            gameOver()
            noPrize()
        } else {
            if(currentIndex >= 9){
                secondPrize()
            }
            else if (currentIndex >= 4){
                thirdPrize()
            } 
            else{
                onScreenQuestion.innerText = "Too bad, you walk away with nothing. Better luck next time."
            }
            gameOver()
        }
    }
}

/**
 * Updates the winnings to point to the right object on the array
 * Used for showing how much a player earned at end of game.
 */
function updateWinnings(){
        currentWinnings = winnings
        currentIndex ++
        currentWinnings = winnings[currentIndex]
        winning1.innerText = currentWinnings
        console.log(currentIndex)
        console.log(currentWinnings)
}


/*=======Various Game Overs ============= */

/**
 * Function to disable the use of further player input
 * on state being called
 */
function gameOver() {
    onScreenAnswerA.innerText = " "
    onScreenAnswerB.innerText = " "
    onScreenAnswerC.innerText = " "
    onScreenAnswerD.innerText = " "
    cashOut.innerText = " "
    time = 0
    ringBell.play()
}

function noPrize(){
    onScreenQuestion.innerText = `Too bad, you walk away with nothing.`
    winning1.innerText = "£0" 
}

function secondPrize(){
    onScreenQuestion.innerText = `Too bad, you walk away with £32,000. Hey you're pretty good kid.`
    winning1.innerText = "£32,000"
}

function thirdPrize(){
    onScreenQuestion.innerText = `Too bad, you walk away with £1,000. Better than nothing thats for sure.`
    winning1.innerText = "£1,000"
}

/*================Lifeline functions ==================== */

/**
 * Use the ask an audience lifeline 1x
 */
const askAudience = () => {
    currentAnswer.classList.add("highlight")
    lifelines.askAudience = 0;
    currentAnswer.style.backgroundColor = "green"
}
/**
 * Use the phone a friend lifeline 1x each
 */
const phoneAFriend = () => {
    currentAnswer.classList.add("highlight")
    lifelines.phoneAFriend = 0;
}

const fiftyFifty = () => {
    lifelines.fiftyFifty = 0;
}

/* ==========Initiates game and timer ================== */

gameStart();
timer()