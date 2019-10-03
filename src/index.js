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
    let final_result = '';
    for(let cur = 10, prev = 0; prev < expr.length; prev+=10, cur+=10){
        let s = expr.substring(prev, cur);
        let res = '';
        for(i = 0; i < 5; i++){
            let symbol = s.substring(i*2, (i+1)*2);
            if (symbol == '10'){
                res += '.';
            }
            else if(symbol == '11'){
                res += '-';
            }
            else{
                continue;
            }
        }
        if(res == ''){
            final_result += ' ';
        }
        else{
            final_result += MORSE_TABLE[res];
        }
    }
    return final_result;
}

module.exports = {
    decode
}