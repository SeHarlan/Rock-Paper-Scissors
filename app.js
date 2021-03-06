import { checkResults, getRandomThrow } from './randomThrow.js';

//dom elements
const playButton = document.getElementById('lets-play-button');
const winLoseText = document.getElementById('win-lose');
const scoreText = document.getElementById('score');
const resetButton = document.getElementById('reset-button');
const resultField = document.getElementById('result-field');
const compChoice = document.getElementById('comp-choice');
const compImage = document.getElementById('comp-img');
const drawText = document.getElementById('draws');


//state
let wins = 0;
let losses = 0;
let draws = 0;

function totalPlays() {
    return wins + losses + draws;
}

function useResults(result) {
    if (result === 'Winner') {
        wins++;
    } else if (result === 'Loser') {
        losses++;
    } else {
        draws++;
    }
    const percent = Math.round((wins / totalPlays()) * 100);
    resultField.style.opacity = '1';
    winLoseText.textContent = `We have a ${result}!`;
    scoreText.textContent = `You've won ${wins} out of ${totalPlays()} games or ${percent}%`;
    drawText.textContent = `~ ${draws} draws ~`;
    // compImage.style.animation = 'shake 0.5s';
}

function displayComputerChoice(choice) {
    
    compChoice.textContent = `VS ${choice}`;
    // let img;
    if (choice === 'Rock') {
        compImage.src = './images/rock.png';
    } else if (choice === 'Paper') {
        compImage.src = './images/paper.png';
    } else {
        compImage.src = './images/scissors.png';
    }   
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
    
    //show comp choice (can only do locally)
    displayComputerChoice(computerThrow);
    
    //declare checkResults
    const newResults = checkResults(computerThrow, playerThrow);
    console.log(newResults);

    useResults(newResults);
    //display results in dom
    //update state elements
    //update dom with results

    compImage.classList.remove('comp-img');
    void compImage.offsetWidth;
    compImage.classList.add('comp-img');
}

function resetGame() {
    //reset state elements
    wins = 0;
    losses = 0;
    draws = 0;

    //update dom
    resultField.style.opacity = '0';
}

playButton.addEventListener('click', getResults);
resetButton.addEventListener('click', resetGame);
