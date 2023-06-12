import React, { useState } from "react";
import {
  Link,
  useHistory
} from "react-router-dom";
import { createDeck } from "../utils/api/index";

function CreateDeck() {
  const [oneDeck, setOneDeck] = useState({
    name: "",
    description: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    setOneDeck({
      ...oneDeck,
      [target.name]: target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createDeck({...oneDeck});
    setOneDeck(response)
    setOneDeck({
      name: "",
      description: "",
    });
    history.push(`/decks/${response.id}`);
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <h1>Create Deck</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            placeholder="Deck Name"
            value={oneDeck.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            className="form-control"
            id="description"
            rows="3"
            placeholder="Brief description of the deck"
            value={oneDeck.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <row>
            <button
              type="button"
              value="Cancel"
              className="btn btn-secondary btn-lg"
              onClick={() => history.push("/")}
            >
              Cancel
            </button>
          {/* Change button to Link to Deck component */}
          <button type="submit" value="Submit" className="btn btn-primary">
            Submit
          </button>
        </row>
      </form>
    </div>
  );
}

export default CreateDeck;
