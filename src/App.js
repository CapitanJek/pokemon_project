import Header from "./components/Header";
import Container from "./components/Container";
import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // const currentUrl = window.location.pathname;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return (
    <>
      <Container>
        <Header />
        <RouterProvider router={router} />
        {/*{currentUrl === "/" ? <MainPage /> : <PokemonPage pokemonUrl={currentUrl}/>}*/}
      </Container>
    </>
  );
}

export default App;
