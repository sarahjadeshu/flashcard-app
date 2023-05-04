import React from "react";
import {
  Link,
  Route,
  Switch
} from "react-router-dom";
import Header from "./Header";
import NotFound from "../Components/NotFound";
import CreateDeck from "../Components/CreateDeck";
import Deck from "../Components/Deck";
import DeckList from "../Components/DeckList";
import StudyDeck from "../Components/StudyDeck";
import EditDeck from "../Components/EditDeck";
import Card from "../Components/Card";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}

        <Switch>
          <Route exact path="/">
            <Link to="/decks/new" class="btn btn-secondary btn-lg">
              + Create Deck
            </Link>
            <DeckList />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>

          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <Card />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <Card />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
