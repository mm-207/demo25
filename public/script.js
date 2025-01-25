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

const showError = (message) => {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 3000);
};

const handleApiCall = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'API request failed');
        }
        return await response.json();
    } catch (error) {
        showError(error.message);
        throw error;
    }
};

const drawCard = async () => {
    try {
        if (!currentDeckId) {
            showError('No deck selected');
            return;
        }
        const data = await handleApiCall(`/temp/deck/${currentDeckId}/draw?count=1`, { 
            method: 'POST' 
        });
        displayCard(data.cards[0]);
    } catch (error) {
        console.error('Error drawing card:', error);
    }
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