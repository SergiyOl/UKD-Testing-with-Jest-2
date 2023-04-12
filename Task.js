function FindNumber(secretWord, numbers) {
    let codeNumber = ''
    for (i = 0; i < secretWord.split('').length; i++) {
        codeNumber = codeNumber + numbers.charAt(secretWord.charCodeAt(i))

    }
    console.log(codeNumber)
    return codeNumber
}

module.exports = {FindNumber}