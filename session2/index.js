// let a = true
// for(let i=0; i<5; i+=1) {
//   console.log(i)
// }

// yob = prompt('điều năm sinh vào đây đi mà!')
// age = 2020 - yob
// console.log(age)
// if(age > 18) {
//   console.log('enjoy yourself :D')
// } 

// if(age > 21) {
//   console.log('Vợ bạn có biết bạn vào đây không?')
// }
// else {
//   console.log('Bố mẹ em có biết em vào đây không?')
// }

let a = Number(prompt())
let b = Number(prompt())
let c = Number(prompt())

let delta = b**2 - 4*a*c
if(delta < 0) {
  console.log('pt vô nghiệm');
} else if(delta === 0) {
  let result = -b / 2*a
  console.log('pt có nghiệm kép', result)
} else {
  let x1 = (delta**0.5 - b) / (2*a)
  let x2 = (delta**0.5 + b) / (2*a)
  console.log(`pt có 2 nghiệm x1=${x1} x2=${x2}`)
  console.log('pt có 2 nghiệm x1=', x1, 'x2=', x2);
}