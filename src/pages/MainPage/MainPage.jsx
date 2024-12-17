import "./main.css";
import {useEffect, useState} from "react";
import Card from "../../components/Card";

const MainPage = () => {
  const [result, setResult] = useState(null);

  const handleGetPokemons = async (
    url = "https://pokeapi.co/api/v2/pokemon/",
  ) => {
    const response = await fetch(url);
    const data = await response.json();
    setResult(data);
  };

  useEffect(() => {
    handleGetPokemons();
  }, []);

    useEffect(() => {

    }, []);

  return (
    <>
      <div className="wrapper">
        {result?.results?.map((item, i) => (
          <div key={i}>
            <Card name={item.name}>{item.name}</Card>
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => handleGetPokemons(result.previous)}>Prev</button>
        <button onClick={() => handleGetPokemons(result.next)}>Next</button>
      </div>
    </>
  );
};

export default MainPage;
