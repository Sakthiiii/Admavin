let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];

function findMaxArray(intArray) {
    let maxPositiveStreak = 0;
    let maxNegativeStreak = 0;
    let currentPositiveStreak = 0;
    let currentNegativeStreak = 0;

    for (let num of intArray) {
        if (num > 0) {
            currentPositiveStreak++;
            currentNegativeStreak = 0;
            if (currentPositiveStreak > maxPositiveStreak) {
                maxPositiveStreak = currentPositiveStreak;
            }
        } else if (num < 0) {
            currentNegativeStreak++;
            currentPositiveStreak = 0;
            if (currentNegativeStreak > maxNegativeStreak) {
                maxNegativeStreak = currentNegativeStreak;
            }
        } else {
            currentPositiveStreak = 0;
            currentNegativeStreak = 0;
        }
    }

    return {
        maxPositiveStreak: maxPositiveStreak,
        maxNegativeStreak: maxNegativeStreak
    };
}

console.log(findMaxArray(intArray));
