const letter = ' bici coche balón balón  playstation  bici coche peluche ';

function listGifts(letter) {
    let newObject = {};
    let arrayStrings = letter.trim().replace(/\s+/gi, ' ').split(' ').filter(string => !string.includes('_'));;

    for (let i = 0; i < arrayStrings.length; i++) {
        if (newObject.hasOwnProperty(arrayStrings[i])) {
            ++newObject[arrayStrings[i]]
        } else {
            newObject[arrayStrings[i]] = 1;
        }
    }

    return newObject;
}

const result = listGifts(letter);

console.log(result)