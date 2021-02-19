"use strict";
// Функция Принимает массив строк. Должна вернуть массив результатов
// проверки двух строк.Если у одной строки с последующей первый и
// последний символы, то true. Например ["asd", "afffd", "cc", "kk"].
// Для такого массива функция должна вернуть [true, false, false]
function strCompare(stringArr) {
  let arr = []
  function compare(a,b) {
    if (typeof(a)== 'string' &&
        typeof(b)== 'string' &&
        a.length && b.length &&
        a[0] == b[0] && a[a.length] == b[b.length])
        {
          return true
        } else {
          return false
        }
    }
  if (Array.isArray(stringArr)) {
    for (let index=0; index < stringArr.length-1; index++)
      arr.push(compare(stringArr[index], stringArr[index  +1]))
    return arr
  } else {  
    return []
  }
}
let somearr = ["asd", "afffd", "cc", "kk", 123,423432,"312321 ", " 1232133", " 12ggergregre3"]
console.log(somearr)
console.log(strCompare(somearr))