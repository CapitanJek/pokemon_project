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
            <div className="cardWrapper" onClick={handleGetPokemons}>
                <p className='cardTitle'>{children}</p>
                {
                    showPokemon && <img src={pokemon.sprites.front_default} alt="image"/>
                }

                <h2>Hello is Lesson's branch</h2>
                <h2>Hello is Lesson's branch</h2>
                <h2>Hello is Lesson's branch</h2>
                <h2>Hello is Lesson's branch</h2>
                <h2>Hello is Lesson's branch</h2>
                <h2>Hello is Lesson's branch</h2>
            </div>
    );
};

export default Card;