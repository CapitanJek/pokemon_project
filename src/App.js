import MainPage from "./pages/MainPage";
import PokemonPage from "./pages/PokemonPage";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  const currentUrl = window.location.pathname;

  console.log(currentUrl);

  return <>
      <Container>
        <Header/>
        {currentUrl === "/" ? <MainPage /> : <PokemonPage pokemonUrl={currentUrl}/>}
      </Container>
      </>;
}

export default App;
