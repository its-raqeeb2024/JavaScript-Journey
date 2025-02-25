// const number  = 100 // normal way of defining the number 
// const num = new Number(112) // object way of defining
// console.log(typeof(num.toString()));
//  const commission = new Number(12.234)
//  console.log(commission);
//  console.log(commission.toFixed(2));
// console.log(num);
// const Precise = new Number(123.4789)
// console.log(Precise.toPrecision(3));
//  //--------------------------------Maths----------------------------------
// console.log(Math);
// console.log(Math.abs(-4 ));
// console.log(Math.round(4.45454 ));
// console.log(Math.max(1,2,3,4));
// console.log(Math.min(1,2,3,4));
// console.log((Math.random()*10)+1)
console.log((Math.floor(Math.random()*10))+1);// to get numbers from 1 to 9
// now we need numbers from specific range
const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max - min +1))+min)
