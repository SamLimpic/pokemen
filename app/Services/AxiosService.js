// @ts-ignore
export const pokedexApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151',
    timeout: 5000
})

// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/samwise/pokemon',
    timeout: 5000
})