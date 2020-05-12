const items = ['Backpack', 'Mi band watch', 'money']
const ulElement = document.getElementById('ul-list')

function render() {
  ulElement.innerHTML = ''
  items.forEach(function(item, index) {
    innerHTML = `
      <li>${item}</li> <button class="remove-btn" id="${index}">remove</button>
    `
    ulElement.insertAdjacentHTML('beforeend', innerHTML)
  })
}

const addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', function() {
  inputElement = document.getElementById('new-item')
  const newItem = inputElement.value
  items.push(newItem)
  inputElement.value = ''
  init()
})

const removeBtn = document.getElementsByClassName('remove-btn')
function remove() {
  for (let i=0; i<removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', function(e) {
      const index = e.target.id
      items.splice(index, 1)
      init()
    })
  }
}


function init() {
  render()
  remove()
}

init()