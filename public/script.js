let currentDeckId = null;

const createDeck = async () => {
    const response = await fetch('/temp/deck', { method: 'POST' });
    const deck = await response.json();
    currentDeckId = deck.deckId;
    updateUI();
};

const shuffleDeck = async () => {
    if (!currentDeckId) return;
    await fetch(`/temp/deck/${currentDeckId}/shuffle`, { method: 'PATCH' });
    showMessage('Deck shuffled!');
};

const drawCard = async () => {
    if (!currentDeckId) return;
    const response = await fetch(`/temp/deck/${currentDeckId}/draw?count=1`, { 
        method: 'POST' 
    });
    const data = await response.json();
    displayCard(data.cards[0]);
};

const displayCard = (card) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = `card ${['Hearts', 'Diamonds'].includes(card.suit) ? 'red' : 'black'}`;
    cardDiv.innerHTML = `
        <div class="card-value">${card.value}</div>
        <div class="card-suit">${getSuitSymbol(card.suit)}</div>
    `;
    document.getElementById('cardDisplay').appendChild(cardDiv);
};

const getSuitSymbol = (suit) => {
    const symbols = {
        'Hearts': '♥',
        'Diamonds': '♦',
        'Clubs': '♣',
        'Spades': '♠'
    };
    return symbols[suit];
};

const updateUI = () => {
    document.getElementById('shuffleDeck').disabled = !currentDeckId;
    document.getElementById('drawCard').disabled = !currentDeckId;
};

const showMessage = (msg) => {
    document.getElementById('message').textContent = msg;
};