// let person = ['Cường', 96, 'Hà Nội', 'dev', false, 1]

let person = {
  name: 'Cường',
  yob: 96,
  home: 'Hà Nội',
  backpack: [5000, 'lăn nách', 'laptop'],
  job: {
    name: 'dev',
    language: ['js', 'python']
  },
} // INIT

// let key = prompt()
job = person.job
backpack = person.backpack // READ
// console.log(person[key]) // READ
person.height = 175 // CREATE
person['height'] = 175 // CREATE

person.home = 'Mỹ Tho' // UPDATE

delete person.backpack // DELETE
for (let k in person) { 
  console.log(k, person[k])
}
