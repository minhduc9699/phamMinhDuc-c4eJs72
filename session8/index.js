const pElement = document.querySelectorAll('.text')
const inputElement = document.getElementById('input')
const button = document.getElementById('submit')
const textContainer = document.querySelector('h1')
const bodyElement = document.querySelector('body')

const newElement = document.createElement('p')
inputElement.addEventListener('input', function(){
  newElement.innerText = inputElement.value
  bodyElement.appendChild(newElement)
})

// cach 1
// function action () {
//   console.log('aaaa')
// } 
// pElement.addEventListener('click', action)

// cach 2
for (let i=0; i<pElement.length; i++){
  pElement[i].addEventListener('click', function(e){
    // pElement[i].style.color = 'red'
    e.target.style.color = 'red'
  })
}

console.log(pElement)



// const pElement1 = document.getElementsByTagName('p')
// console.dir(pElement1)
// const pElement2 = document.getElementsByClassName('text')
// console.dir(pElement2)
// const pElement3 = document.getElementById('paragraph')
// console.dir(pElement3)


// const container = document.getElementById('container')
// console.dir(container.children)