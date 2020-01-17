export function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    const throws = ['Rock', 'Paper', 'Scissors'];
    return throws[randomNumber];
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
