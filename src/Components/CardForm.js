import React, { useEffect, useState } from "react";

function CardForm({ card, newCard, handleSubmit, handleChange }) {
  if (card) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Edit Card</h2>
        <div className="form-group">
          <label>Front</label>
          <textarea
            id="front"
            name="front"
            className="form-control"
            onChange={handleChange}
            type="text"
            value={card.front}
          />
        </div>
        <div className="form-group">
          <label>Back</label>
          <textarea
            id="back"
            name="back"
            className="form-control"
            onChange={handleChange}
            type="text"
            value={card.back}
          />
        </div>
      </form>
    );
  } else if (newCard) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Add Card</h2>
        <div className="form-group">
          <label>Front</label>
          <textarea
            id="front"
            name="front"
            className="form-control"
            onChange={handleChange}
            type="text"
            value={newCard.front}
          />
        </div>
        <div className="form-group">
          <label>Back</label>
          <textarea
            id="back"
            name="back"
            className="form-control"
            onChange={handleChange}
            type="text"
            value={newCard.back}
          />
        </div>

        <button className="btn btn-primary mx-1" type="submit">
          Save
        </button>
      </form>
    );
  }
}

export default CardForm;