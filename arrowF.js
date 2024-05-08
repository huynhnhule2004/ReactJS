let arr = [1,3,5,2,4,5,10];

let sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));

let squareArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]*arr[i]);
    }
    return newArr;
}

console.log(squareArray(arr));