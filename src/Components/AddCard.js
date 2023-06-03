import React, { useEffect, useState } from "react";
import { readDeck, createCard } from "../utils/api/index";
import { Link, useHistory, useParams } from "react-router-dom";
import CardForm from "./CardForm";

function AddCard() {
  const history = useHistory();
  const { deckId } = useParams();

  const initialState = {
    front: "",
    back: "",
  };

  const [newCard, setNewCard] = useState(initialState);
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await readDeck(deckId);

        setDeck(response);
      } catch (error) {
        console.error("Something went wrong", error);
      }
    }
    fetchData();
  }, []);

  function handleChange({ target }) {
    setNewCard({
      ...newCard,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await createCard(deckId, { ...newCard });
    history.go(0);
    setNewCard(initialState);
    return response;
  }

  function handleDone() {
    history.push(`/decks/${deckId}`);
  }

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}>{deck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Add Card</li>
      </ol>
      <h2>{deck.name}: Add Card</h2>
      <CardForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newCard={newCard}
      />



      <button className="btn btn-secondary mx-1" onClick={() => handleDone()}>
        Done
      </button>
    </div>
  );
}

export default AddCard;
