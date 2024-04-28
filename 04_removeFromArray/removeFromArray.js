const removeFromArray = function(arr, ...args) {
    let newarr =[]
    arr.forEach((item) => {
        
        if(!args.includes(item))
        {
            newarr.push(item)
        }
    });
    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
