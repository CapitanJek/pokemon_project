import React, {useEffect, useState} from 'react';

const PokemonPage = (props) => {
    const {pokemonUrl} = props
    const [pokemonData, setPokemonData] = useState(null)

    const handleGetPokemon = async ( ) => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonUrl);
        const data = await response.json()
        setPokemonData(data)
    }

    useEffect(() => {
        handleGetPokemon()
    }, []);
    useEffect(() => {
        console.log(pokemonData)
    }, [pokemonData]);


    return (
        <div>
            <h1>
                {pokemonData?.name}
            </h1>
            <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name}/>
            <p>{pokemonData?.order}</p>
        </div>
    );
};

export default PokemonPage;