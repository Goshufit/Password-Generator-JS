//Dom elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomsymbol
};
//Generate event listen
generateEl.addEventListener('click', () => {
    //Unary operator turns string into number//
    const length = +lengthEl.value;
    //.checked indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.//
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});
//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    //1. Initialize password variables
    //2. Filter out unchecked types
    //3. Loop over length and call generator function for each type
    //4. Add final password to the password var and return

    let generatePassword = '';

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    console.log('typesArr: ', typesArr);

}

// Generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomsymbol() {
    const symbols = '!@#$%^&*()_+{}[]/;';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

