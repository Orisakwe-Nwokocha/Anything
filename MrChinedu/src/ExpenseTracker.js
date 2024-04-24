function calculateTotalAmountSpent(expenses) {
    let sum = 0;
    for (const key in expenses) sum += expenses[key];
    return sum;
}


module.exports = {calculateTotalAmountSpent};