const express = require('express');
const app = express();

// Rute for root (/) som returnerer en enkel melding
app.get('/', (req, res) => {
  res.send('Hello World!');  // Kan endres til hva du vil vise på root URL-en
});

// Rute for /tmp/poem som returnerer et dikt
app.get('/tmp/poem', (req, res) => {
  res.send('This is a poem...\nIt is beautiful.\nEnjoy reading it!');  // Du kan endre dette til et riktig dikt
});

// Rute for /tmp/quote som returnerer et tilfeldig sitat
app.get('/tmp/quote', (req, res) => {
  const quotes = [
    'The only way to do great work is to love what you do. – Steve Jobs',
    'Life is what happens when you’re busy making other plans. – John Lennon',
    'In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.',
    'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson',
    'It is never too late to be what you might have been. – George Eliot'
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(randomQuote);
});

// Sett opp en port og start serveren
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
