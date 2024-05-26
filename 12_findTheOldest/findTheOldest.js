const findTheOldest = function(arr) {
    let oldestPerson = 0;
    let maxAge = 0;

    for (let person of arr) {
        const currentYear = new Date().getFullYear();
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;        
        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
