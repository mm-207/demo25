
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());


const decks = {};


const createDeck = () => {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }

  return deck;
};


app.post('/temp/deck', (req, res) => {
  const deckId = uuidv4();
  decks[deckId] = createDeck();
  res.status(201).json({ deck_id: deckId });
});


app.patch('/temp/deck/shuffle/:deck_id', (req, res) => {
  const { deck_id } = req.params;

  if (!decks[deck_id]) {
    return res.status(404).json({ error: 'Deck not found' });
  }

  const deck = decks[deck_id];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  res.json({ message: 'Deck shuffled' });
});


app.get('/temp/deck/:deck_id', (req, res) => {
  const { deck_id } = req.params;

  if (!decks[deck_id]) {
    return res.status(404).json({ error: 'Deck not found' });
  }

  res.json(decks[deck_id]);
});


app.get('/temp/deck/:deck_id/card', (req, res) => {
  const { deck_id } = req.params;

  if (!decks[deck_id]) {
    return res.status(404).json({ error: 'Deck not found' });
  }

  const deck = decks[deck_id];
  if (deck.length === 0) {
    return res.status(400).json({ error: 'No cards left in the deck' });
  }

  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomIndex, 1)[0];
  res.json(card);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
