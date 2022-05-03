const test = 'peluche (bici coche bici coche balón';

function isValid(letter) {
    if (letter.includes('{') || letter.includes('[')) {
        return false;
    } else {
        let arrayStrings = letter.split(' ');
        for (let a = 0; a < arrayStrings.length; a++) {
            if (arrayStrings[a].includes('((') || arrayStrings[a].includes('()')) {
                return false;
            }
            for (let b = 0; b < arrayStrings[a].length; b++) {
                if (b == 0) {
                    if (arrayStrings[a][b] === '(') {
                    if (arrayStrings[a][arrayStrings[a].length - 1] === ')') {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }
}

console.log(isValid(test));