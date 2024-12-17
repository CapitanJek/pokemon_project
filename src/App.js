import MainPage from "./pages/MainPage";
import PokemonPage from "./pages/PokemonPage";
import Header from "./components/Header";

function App() {
  const currentUrl = window.location.pathname;

  console.log(currentUrl);

  return <>
    <Header/>
    {currentUrl === "/" ? <MainPage /> : <PokemonPage pokemonUrl={currentUrl}/>}
      </>;
}

export default App;
