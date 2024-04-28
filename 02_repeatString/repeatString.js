const repeatString = function(a,b) {
    let res = ''
    if(b<0) return "ERROR"
for(i=0;i<b;i++)
{
    res +=a;
}
return res;
};

// Do not edit below this line
module.exports = repeatString;
