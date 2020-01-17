// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { checkResults } from '../randomThrow.js';
const test = QUnit.test;

test('time to test a function', function(assert) {

    const result1 = checkResults('Rock', 'Rock');
    assert.equal(result1, 'Draw');

    const result2 = checkResults('Rock', 'Scissors');
    assert.equal(result2, 'Loser');

    const result3 = checkResults('Rock', 'Paper');
    assert.equal(result3, 'Winner');

});
