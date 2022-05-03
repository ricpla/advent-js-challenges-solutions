function listGifts(letter) {
    let newObject = {};
    let arrayStrings = [];
    let finalArray = [];
    arrayStrings = letter.trim().split(' ');

    finalArray = arrayStrings.filter(string => !string.includes('_'));

    for (string of finalArray) {
        if (string in newObject) {
            ++newObject[string]
        } else {
            newObject[string] = 1;
        }
    }

    return newObject;
}

console.log(listGifts('bici coche balón _playstation bici coche peluche'));