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

// Copy password to clipboard //
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    //The HTMLInputElement.select() method selects all the text in a <textarea> element or in an <input> element that includes a text field. 
    textarea.select();
    document.execCommand('copy');
    //The Element.remove() method removes the element from the DOM.
    textarea.remove();
    alert('Password copied to clipboard!')
})


//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    //1. Initialize password variables
    //2. Filter out unchecked types
    //3. Loop over length and call generator function for each type
    //4. Add final password to the password var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    console.log('typesArr: ', typesArr);

    if(typesCount === 0) {
        return '';
    }

for(let i = 0; i < length; i += typesCount) {
typesArr.forEach(type => {
    //The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. 
    const funcName = Object.keys(type)[0];


    generatedPassword += randomFunc[funcName]();
});
}
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. 
const finalPassword = generatedPassword.slice(0, length);

return finalPassword;

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

