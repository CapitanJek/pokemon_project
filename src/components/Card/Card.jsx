import React, {useEffect, useState} from "react";
import "./Card.css";

const Card = (props) => {
  const { children, name, url } = props;
  const [pokemon, setPokemon] = useState(null);



    const handleGetPokemon = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data)
  }

    useEffect(() => {
       handleGetPokemon()
    }, []);

    useEffect(() => {
        console.log(pokemon)
    }, [pokemon])



  return (
    <a href={name}>
      <div className="cardWrapper">
            <p className="cardTitle">{children}</p>
            <img className="cardImg"  src={pokemon?.sprites?.front_default} alt={pokemon?.name}/>
      </div>
    </a>
  );
};

export default Card;
