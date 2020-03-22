module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    };
    if (arr.length == 0) {
        return [];
    };
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '--discard-next'){
            i++;
        } else if(arr[i] === '--discard-prev'){
            newArr.pop();
        } else if(arr[i] === '--double-next'){
            newArr.push(arr[i + 1]);
        } else if(arr[i] === '--double-prev'){
            newArr.push(arr[i - 1]);
        } else {
            newArr.push(arr[i]);
        }
    };
    newArr.filter( e => e !== undefined);
    return newArr;
};
