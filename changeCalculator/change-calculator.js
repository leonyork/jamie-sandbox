const denominations = [200, 100, 50, 20, 10, 5, 2, 1];

module.exports = function(total) {
    let result = [];
    while (total > 0) {
        let change;
        for (let denomination of denominations) {
            change = denomination;
            if (change <= total) {
                break;
            }
        }
        result.push(change);
        console.log(`Total before change: ${total}, Change: ${result}`);
        total -= change;
    }
    return result;
}