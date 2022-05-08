
function reverseString(string){
   const arrayReversed = string.split('').reverse().join('');
    return arrayReversed;
}

module.exports = reverseString;