function capitalize(string) {
   let array = string.split('');
    array[0] = array[0].toUpperCase();
  let capitalized = array.join('')
    return capitalized;
  }

  module.exports = capitalize;