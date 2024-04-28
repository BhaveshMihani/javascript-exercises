const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            // Century year
            return year % 400 === 0;
        }
        // Non-century leap year
        return true;
    }
    // Common year
    return false;
};

// Do not edit below this line
module.exports = leapYears;
