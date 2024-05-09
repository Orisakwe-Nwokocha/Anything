function modeObjectOf(numbers) {
    let seen = [];
    let result = {};

    for (let number of numbers) {
        let count = 0;
        if (seen.includes(number)) continue;
        for (let num of numbers) if (number === num) count++;
        result[number] = count;
        seen.push(number);
    }

    return result;
}

let input = [1, 2, 2, 1, 3];
console.log(modeObjectOf(input));

module.exports = {modeObjectOf};