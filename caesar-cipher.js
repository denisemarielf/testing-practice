const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function caesarCipher(string, key) {
    let array = string.split('');
    console.log(array)
    let cipherArray = []
    array.forEach(letter => {
        let index = (alphabet.indexOf(letter) + key);
        console.log(index)
        if (alphabet.indexOf(letter) !== -1 && index < 26){
           cipherArray.push(alphabet[index]) 
            console.log(1)
        } else {
            if (index >= 26) {
                console.log(2)
                let correctIndex = (index - 26);
                cipherArray.push(alphabet[correctIndex])
            } else {
               cipherArray.push(letter) 
            }
        }
    })
   return cipherArray.join('');
}

module.exports = caesarCipher;
