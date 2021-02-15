"use strict";

// Написать функцию, которая принимает целочисленный number
// и рисует спиральную матрицу NxN, где N - входной параметр.

// matrix(3)
// 1 2 3
// 8 9 4
// 7 6 5

function spiralMartix(n) {
  const arr = [];
  let counter = 1;

  let rowMin = 0;
  let rowMax = n - 1;
  let colMin = 0;
  let colMax = n - 1;

  for (let i = 0; i < n; i++) {
    arr.push(new Array(n).fill(0));
  }

  while (rowMin <= rowMax && colMin <= colMax) {
    // console.log("rm rM cm cM", rowMin, rowMax, colMin, colMax);
    for (let col = colMin; col <= colMax; col++) {
      arr[rowMin][col] = counter++;
    }
    // console.log(counter);
    rowMin++;
    for (let row = rowMin; row <= rowMax; row++) {
      arr[row][colMax] = counter++;
    }
    colMax--;
    for (let col = colMax; col >= colMin; col--) {
      arr[rowMax][col] = counter++;
    }
    rowMax--;
    for (let row = rowMax; row >= rowMin; row--) {
      arr[row][colMin] = counter++;
    }
    colMin++;
  }

  return arr;
}
console.log('matrix', spiralMartix(1));


function show2DArray(array2D){
  // print array as 2d divs table
  if (!(Array.isArray(array2D))){
    return false
  }

  let arrBody = document.createElement('div');
  arrBody.id = "arr-body"
  arrBody.className = "arr-body"
  // console.log('lendth', array2D.length);
  document.body.appendChild(arrBody)
  
  for (let x = 0; x < array2D.length; x++){
    let elemRow = document.createElement('div')   
    elemRow.id = `row${x}`
    elemRow.className = `arr-row`
    
    let parent =  document.getElementById('arr-body')
    parent.appendChild(elemRow)

    for (let y = 0; y < array2D[x].length ; y++){
      let elem = document.createElement('div')   
      elem.className = `arr-elem`
      elem.innerText = array2D[y][x]
      let parent =  document.getElementById(`row${x}`)
      parent.appendChild(elem)

    }
  }
}

// show2DArray([[1,4],[2,4]]);

let dimension = prompt('enter the length of array', "4")
if (dimension > 100){
  alert('to big dimension \n please enter value < 100')
} else if (dimension < 100 && dimension >= 0) {
  show2DArray(spiralMartix(dimension))
} else {
  alert('error')
}