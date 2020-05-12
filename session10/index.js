// async function fetchData () {
  // const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
//   const realData = await pokemonData.json()
//   console.log(realData)
// }
// fetchData()

async function set() {
  await setTimeout(function() {
    console.log('đã 5 giây rồi')
  }, 5000)
}



function diCho() {
  return new Promise(function (resolve, reject){
    const random = Math.random()
    console.log(random)
    if (random < 0.5) {
      const item = 'mớ rau'
      resolve(item)
    } else if (random < 0.8) {
      reject('do tắc đường')
    } else {
      reject('rơi mất ví')
    }
  })
}

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu/').then(function(data) {
//   data.json().then(function(realData) {
//     console.log(realData)
//   }).catch(function(errors) {
//     console(errors)
//   })
// })

async function fetchData () {
  try {
    const item = await diCho()
    console.log(item)
  } catch(errors) {
    console.log(errors)
  }
}


// fetchData()
