// let monAn1 = 'pho'
// let monAn2 = 'com'
// let monAn3 = 'mi'
// let monAn4 = 'bun'
// let monAn5 = 'chao'

// let monAn = [
//   'pho', 
//   'com', 
//   'mi', 
//   'bun', 
//   'chao', 
//   'thit cho'
// ] // INIT
// console.log(monAn)
// // let a = prompt()
// // let b = prompt()
// monAn.splice(0, 1)// DELETE
// monAn.push('thịt lợn') // CREATE
// monAn[1] = 'bún đậu mắm tôm' // UPDATE
// for(let i=0; i<monAn.length; i++) { // READ
//   console.log(i, monAn[i])
// }


// let stuff = ['adidas', 'gucci', 'converse', 'chanel']

// let option = prompt('What do you want? (C,R,U,D)').toUpperCase()

// if (option == 'C') {
//   let new_item = prompt('name your new stuff')
//   stuff.push(new_item)
// } else if (option == 'R') {
//   console.log('this is your stuff');
// } else if (option == 'U') {
//   let index = Number(prompt('enter the position you want to edit')) - 1
//   if (Number.isNaN(index)) {
//     console.log('nhập số vào giúm con T.T')
//   } else {
//     if (index >= stuff.length){
//       console.log('nhập số bé thôi!!!')
//     } else {
//       let new_value = prompt('enter new name')
//       stuff[index] = new_value
//     }
//   }
// } else if (option == 'D') {
//   let index = prompt('enter the position you want to delete') - 1
//   stuff.splice(index, 1)
// }

// for (let i=0; i<stuff.length; i++) {
//   console.log(i + 1, stuff[i])
// }