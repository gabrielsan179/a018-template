
const arrayNum = [1, 2, 3, 4, 5, 6, 7]

function multipNum (array){
  const arrayDaFunção = []
  for (numero of array){
    arrayDaFunção.push(numero * 3)
  }
  return arrayDaFunção
}
const novoArray = multipNum(arrayNum)
console.log(novoArray)
//console.log(multipNum(arrayNum))

function numPar (array){
  const arrayDaFunção = []
  for (numero of array){
    if(numero % 2 === 0){
    arrayDaFunção.push(numero)
    }
  }
  return arrayDaFunção
}

const outroArray = numPar(arrayNum)
console.log(outroArray)

const funçãoNova = (array, função) => {
  const resultadoFunção = função(array)
  console.log(resultadoFunção)
}

funçãoNova (arrayNum, multipNum)
funçãoNova (arrayNum, numPar)

const outroArray1 = outroArray.map((numero) => {
  return numero * 5
})

console.log(outroArray1)

const outroArray2 = novoArray.filter((numero) => {
  if (numero % 2 === 1)
  return numero
})

console.log(outroArray2)

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

// Com o array de pokémons do template, faça o seguinte:
// Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;
function medico(pokemon){
  return pokemon.vida = 100
}

// Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;
const pokemonsVidaCheia = pokemons.map((elemento) =>{
  medico(elemento)
  return elemento
})
console.log(pokemonsVidaCheia)


// Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback
const pokemonsDeFogo = pokemons.filter((elemento) =>{
  return elemento.tipo === "fogo"
})

console.log(pokemonsDeFogo)
