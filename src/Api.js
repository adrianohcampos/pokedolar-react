const basicFetch = async (endpoint) => {
    const req = await fetch(endpoint);
    const json = await req.json();
    return json;
}

const api = {
    getDolar: async () => {
        return await basicFetch("https://economia.awesomeapi.com.br/all/USD");
    },
    getPokemon: async (pokemonId) => {
        return await basicFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    }
}

export default api;