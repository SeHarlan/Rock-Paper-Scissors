export function getRandomThrow() {

    const randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else if (randomNumber === 3) {
        return 'Scissors';
    } else {
        throw new Error('not valid computer throw');
    }

}

export function checkResults(computerThrow, userThrow) {
    
    if (computerThrow === userThrow) {
        return 'Draw';
    } else if (computerThrow === 'Rock' && userThrow === 'Paper') {
        return 'Winner';
    } else if (computerThrow === 'Paper' && userThrow === 'Scissors') {
        return 'Winner';
    } else if (computerThrow === 'Scissors' && userThrow === 'Rock') {
        return 'Winner';
    } else {
        return 'Loser';
    }

}
