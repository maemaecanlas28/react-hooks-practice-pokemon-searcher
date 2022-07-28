import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [cards, setCards] = useState ([])
  const [searchInput, setSearchInput] = useState("")

  useEffect (() => {
    fetch("http://localhost:3001/pokemon")
    .then(data => data.json())
    .then(data => setCards(data))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm cards={cards} setCards={setCards}/>
      <br />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <br />
      <PokemonCollection cards={cards} searchInput={searchInput}/>
    </Container>
  );
}

export default PokemonPage;
