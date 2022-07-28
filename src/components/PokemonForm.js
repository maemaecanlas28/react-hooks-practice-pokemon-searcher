import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ cards, setCards }) {

  const [name, setName] = useState ("")
  const [hp, setHp] = useState ("")
  const [frontUrl, setFront] = useState ("")
  const [backUrl, setBack] = useState ("") 

  function handleNameChange (event) {
    setName(event.target.value)
  }

  function handleHpChange (event) {
    setHp(event.target.value)
  }

  function handleFrontUrlChange (event) {
    setFront(event.target.value)
  }

  function handleBackUrlChange (event) {
    setBack(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault();
    const formData = {
      "name": name, 
      "hp": hp,
      "sprites": {
        "front": frontUrl,
        "back": backUrl,
      }
    }
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }

    fetch("http://localhost:3001/pokemon", configObj)
    .then(data => data.json())
    .then((data) => {
      const dataArray = [...cards, data]
      setCards(dataArray)
      setName("")
      setHp("")
      setFront("")
      setBack("")
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleNameChange}
            value={name} />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            onChange={handleHpChange}
            value={hp} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            onChange={handleFrontUrlChange}
            value={frontUrl}
            name="frontUrl"/>
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            onChange={handleBackUrlChange}
            value={backUrl}
            name="backUrl"/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
