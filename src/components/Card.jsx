import React, {useState} from 'react';
import './Card.css'


const Card = (props) => {
    const {children, url} = props;



    const [pokemon, setPokemon] = useState(null)
    const [showPokemon, setShowPokemon] = useState(false)

    const handleGetPokemons = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data)
        showPokemon ? setShowPokemon(false) : setShowPokemon(true)



    }

    // useEffect(() => {
    //     handleGetPokemons()
    // },[]);




    return (
            // <div className="cardWrapper" onClick={handleGetPokemons}>
            //     <p className='cardTitle'>{children}</p>
            //     {
            //         showPokemon && <img src={pokemon.sprites.front_default} alt={children}"/>
            //     }
            //
            //
            // </div>
        <div>
                Hello world
        </div>
    );
};

export default Card;