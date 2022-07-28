import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ card, frontImage, backImage }) {

  const [isClicked, setIsClicked] = useState(false)

  function handleClickDisplay () {
    setIsClicked(isClicked => !isClicked)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleClickDisplay}>
          <img src={!isClicked ? frontImage : backImage} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{card.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {card.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
