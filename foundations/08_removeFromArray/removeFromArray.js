const removeFromArray = function(array,...numbers) {
    return array.filter(num=> !numbers.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
