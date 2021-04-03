const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hal here... API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Hal here... Server started on port ${PORT}`));