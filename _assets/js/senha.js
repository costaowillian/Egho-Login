const generatePasswordButton = document.querySelector('#gerar-senha')
const generatePasswordElement = document.querySelector('#senha-gerada')
const copyPasswordButton = document.querySelector('#Copy-Button')

// gerando a senha
const getLetterLowerCase = () => {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUperrCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const Symbol = `()!@#$%&*?/[]{}`;
    return Symbol[Math.floor(Math.random() * Symbol.length)];
}

const generatePassword = (getLetterLowerCase, getLetterUperrCase, getNumber, getSymbol) => {
    let password = '';

    const passwordLendgth = 10;

    const generators = [
        getLetterLowerCase, 
        getLetterUperrCase, 
        getNumber, 
        getSymbol
    ];

    for (i =0; i < passwordLendgth; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue
        });
    };

    password = password.slice(0, 10);

    generatePasswordElement.style.display = 'flex';
    generatePasswordElement.querySelector('h4').innerText = password;
}

// eventos
generatePasswordButton.addEventListener('click', () => {
    generatePassword(getLetterLowerCase, getLetterUperrCase, getNumber, getSymbol);
});

copyPasswordButton.addEventListener('click', () =>{
    navigator.clipboard.writeText(generatePasswordElement.querySelector('h4').lastChild.nodeValue)
})

