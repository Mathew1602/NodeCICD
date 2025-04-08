const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
res.send('Hello, Dockerized Node.js App!, That is not deployed');
});
app.listen(PORT, () => {
console.log(`App running on http://localhost:${PORT}`);
});

