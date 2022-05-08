function analyzeArray(array) {
    let object = {};
    const sum = array.reduce((prev, acc) => prev + acc);
    const average = (sum / array.length);
    const sortedArray = array.sort((a,b) => a - b)  
    object.average = average;
    object.min = sortedArray[0];
    object.max = sortedArray[array.length-1];
    object.length = array.length;
    return object;
  }

module.exports = analyzeArray;