const express = require('express');
const app = express();

app.use(express.json());

app.post('/tmp/sum/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: "Begge parametere må være tall" });
    }

    const sum = a + b;
    res.json({ sum });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
