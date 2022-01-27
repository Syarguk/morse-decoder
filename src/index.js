const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resStr = '';
    for (let i = 0; i < expr.length; i += 10) {
        let subStr = expr.slice(i, i + 10);
        let curStr = '';
        if(subStr[0] == '*') {
            resStr += ' '; 
            continue;
        }
        for (let j = 0; j < subStr.length; j += 2) {
            if(subStr[j] == '0') continue;
            if('10' == subStr.slice(j, j + 2)) {
                curStr += '.';
            } else {
                curStr += '-';
            }
        }
        resStr += MORSE_TABLE[curStr];
    }
    return resStr;
}

module.exports = {
    decode
}
