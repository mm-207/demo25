const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let decks = {};

function createDeck() {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  let deck = [];
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push({ suit, value });
    });
  });

  return deck;
}

app.post('/temp/deck', (req, res) => {
  const deckId = uuidv4();
  const newDeck = createDeck();
  decks[deckId] = {
    deckId,
    cards: newDeck,
    shuffled: false
  };
  res.status(201).json(decks[deckId]);
});

app.get('/temp/deck/:deckId', (req, res) => {
  const { deckId } = req.params;
  const deck = decks[deckId];

  if (!deck) {
    return res.status(404).json({ error: 'Deck not found' });
  }

  res.status(200).json(deck);
});

app.get('/temp/deck/:deckId/card', (req, res) => {
  const { deckId } = req.params;
  const deck = decks[deckId];

  if (!deck) {
    return res.status(404).json({ error: 'Deck not found' });
  }

  res.status(200).json(deck.cards);
});


function shuffleDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


app.patch('/temp/deck/:deckId/shuffle', (req, res) => {
  const { deckId } = req.params;
  const deck = decks[deckId];

  if (!deck) {
    return res.status(404).json({ error: 'Deck not found' });
  }

  deck.cards = shuffleDeck(deck.cards);
  deck.shuffled = true;
  res.status(200).json(deck);
});


app.post('/temp/deck/:deckId/draw', (req, res) => {
  const { deckId } = req.params;
  const count = parseInt(req.query.count) || 1;
  const deck = decks[deckId];

  if (!deck) {
    return res.status(404).json({ error: 'Deck not found' });
  }

  if (deck.cards.length < count) {
    return res.status(400).json({ error: 'Not enough cards remaining' });
  }

  const drawnCards = deck.cards.splice(0, count);
  res.status(200).json({ cards: drawnCards, remaining: deck.cards.length });
});

app.get('/', (req, res) => {
    res.send('API is running! Use specific endpoints like /temp/deck');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
