"use strict";
// 1) Написать рекурсивную функцию вычисления чисел Фибоначчи.
// На вход функции подавать длину конечного массива чисел.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610...

function fibArr(fibLength, bigvalues=false) {
//  fibLength: Ingerer - required length of array
//  bigvalues: Boolean - trigger for run with values > 37
//  return array of Fibonacci numbers
  let arr = []
  if (typeof(fibLength) != 'number' || fibLength < 0){
    return "Input error!"
  }
  if (fibLength > 37 && !bigvalues) return 'big value, limit 37'
  function fib(index){
    if (typeof(index) != 'number' || index < 0){
      return "Input error!"
    }
    if (index == 0 || index == 1) {
      return index == 0 ? 0 : 1
    }
    else {
      return (fib(index - 1) + fib(index - 2))
    }
  }
  for (let x = 0; x < fibLength; x++){
    arr.push(fib(x))
  }
  return arr
}
// console.log(fibArr(""))
// console.log(fibArr(-1))
// console.log(fibArr({}))
// console.log(fibArr(null))
// console.log(fibArr(undefined))
for ( let i = 0; i < 10; i++){
  console.log(fibArr(i))
}
// console.log(fibArr(38))