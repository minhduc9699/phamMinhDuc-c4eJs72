async function fetchData() {
  const request = await fetch('https://pokeapi.co/api/v2/pokemon/3/')
  const data = await request.json()
  return data
}

async function render() {
  const data = await fetchData()
  const name = data.name
  const weight = data.weight
  const abilities = data.abilities
  const types = data.types

  const rootElement = document.getElementById('root')
  const html = `
    <p>Name: ${name}</p>
    <p>Weight: ${weight}</p>
  `
  rootElement.insertAdjacentHTML('beforeend', html)
  abilities.forEach(function(item) {
    rootElement.insertAdjacentHTML(
      'beforeend',
      `<li>${item.ability.name}</li>`
    )
  })
}

render()
