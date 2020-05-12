function calc(a, b, op) {
  if (op == '+') {
    return a + b
  } else if (op == '-') {
    return a - b
  } else if (op == '/') {
    return a / b
  } else if (op == '*') {
    return a * b
  }
}



let a = Math.floor(Math.random() * 10)
let b = Math.floor(Math.random() * 10)
let opPoll = ['+', '-', '*', '/']
let op = opPoll[Math.floor(Math.random() * 5)]
if(op == '/' && b == 0) {
  // your code here
}
let c = calc(a, b, op)
let numberPoll = [-1, 0, 1]
let wrongUnit = numberPoll[Math.floor(Math.random() * 3)]
let d = c + wrongUnit
console.log(`${a} ${op} ${b} = ${d}`)

