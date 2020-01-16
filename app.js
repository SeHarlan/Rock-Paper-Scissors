import { checkResults, getRandomThrow } from './randomThrow.js';

//dom elements
const playButton = document.getElementById('lets-play-button');
const winLoseText = document.getElementById('win-lose');
const scoreText = document.getElementById('score');
const resetButton = document.getElementById('reset-button');

//state
let wins = 0;
let losses = 0;
let draws = 0;


function totalPlays() {
    return wins + losses + draws;
}

function getResults() {
    //set new state of choice
    const userChoice = document.querySelector('input:checked');

    //determine player choice
    const playerThrow = userChoice.value;
    console.log(playerThrow);

    //import computer choice
    const computerThrow = getRandomThrow();
    console.log(computerThrow);

    //declare checkResults
    const newResults = checkResults(computerThrow, playerThrow);
    console.log(newResults);;

    //display results in dom
    //update state elements
    //update dom with results

}
playButton.addEventListener('click', getResults);

function resetGame() {
    //reset state elements
    //update dom
}
resetButton.addEventListener('click', resetGame);
