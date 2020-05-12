// define
// parameter
// function greeting(name) {
//   console.log('Hello', name)

// }






// function add(a, b) {
//   let c = a + b
//   return c
// }



// function loop(array, action) {
//   for(let i=0; i<array.length; i ++) {
//     action(array[i], i)
//   }
// }


// // function action2(item, index) {
// //   string = String(item)
// //   console.log(string)
// // }


// // loop([1,2,3,4,5], action2)


// const loop1 = (c) => c + 1

// a = loop1(3)
// console.log(a);


// array = ['a', 'b', 'c']

// array.forEach(function(item) {
//   console.log(item)
// })
// array.filter()
// array.map()

// array.reduce()

// // call
const arr = [1,2,3,4,5];
let total = 0;
arr.forEach((num) => {
  total += num;
})
console.log(total);


total = arr.reduce(function(perviousValue, item) {
  return perviousValue + item
}, 0)
