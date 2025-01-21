const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');  
});

app.get('/tmp/poem', (req, res) => {
  res.send('I am a woman, strong and free, With dreams as vast as the endless sea. I rise, I shine, and boldly stand, With equality held in my hand.');  // Du kan endre dette til et riktig dikt
});

app.get('/tmp/quote', (req, res) => {
  const quotes = [
    '“Do not go where the path may lead, go instead where there is no path and leave a trail.” – Ralph Waldo Emerson',
    '“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt',
    '“Success is not final, failure is not fatal: It is the courage to continue that counts.” – Winston Churchill',
    '“The greatest glory in living lies not in never falling, but in rising every time we fall.” – Nelson Mandela',
    '“Life itself is the most wonderful fairy tale.” – Hans Christian Andersen',
    '“You must be the change you wish to see in the world.” – Mahatma Gandhi',
    '“The mind is everything. What you think you become.” – Buddha',
    '“It is never too late to be what you might have been.” – George Eliot',
    '“Do not wait for leaders; do it alone, person to person.” – Mother Teresa',
    '“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb'
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(randomQuote);
});

app.post('/tmp/sum/:a/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);  
  const b = parseInt(req.params.b, 10);  
  
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Both a and b must be numbers');
  }

  const sum = a + b;  
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

