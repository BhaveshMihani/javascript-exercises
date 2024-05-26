const palindromes = function (string) {

    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedstring = string
    .toLowerCase()
    .split('')
    .filter((character) => alpha.includes(character))
    .join('');
    const reversedString = cleanedstring.split('').reverse().join('');

    return cleanedstring === reversedString
};

// Do not edit below this line
module.exports = palindromes;
