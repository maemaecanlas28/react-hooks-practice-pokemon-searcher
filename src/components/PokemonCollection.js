import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ cards, searchInput }) {

  const pokemonCards = cards
  .filter(card => {
    const lowerCaseCardName = card.name.toLowerCase()
    const lowerCaseInput = searchInput.toLowerCase()

    return lowerCaseCardName.includes(lowerCaseInput)
  })
  .map(card => {
    return (
    <PokemonCard key={card.id} card={card} frontImage={card.sprites.front} backImage={card.sprites.back} />
  )})

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
