const fibonacci = function(n) {
    if(n == 0) return 0
    if(n < 0) return "OOPS"
    if(typeof n !== 'number'){
        n = parseInt(n)
    }
    num1 = 1
    num2 = 0
    for(i=2;i<=n;i++){
        fibo = num1 + num2;
        num2 =num1
        num1 = fibo
    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
