"use strict";

function calcFibArray(len){
    let arr = [0,1]

    if (typeof(len) != 'number' || len < 0){
        return "Input error!"
    }

    function fib(index){
        if (!(len <= arr.length)) {
            let elem = arr[arr.length-1] + arr[arr.length-2] 
            arr.push( elem )
            fib(index-1);
        }

        return arr.slice(0,len)
    }
    return fib(len);
}


// console.log(calcFibArray(null));
// console.log(calcFibArray(-1));
// console.log(calcFibArray({}));

console.log(calcFibArray(0));
console.log(calcFibArray(1));
console.log(calcFibArray(2));
console.log(calcFibArray(4));
console.log(calcFibArray(100));


