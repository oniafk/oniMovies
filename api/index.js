const express = require('express');
const app = express();

const routerAPIRequest = require('./routes/index.js');

app.get('/api-key', (req, res) => {
  res.send(process.env.API_KEY);
});

routerAPIRequest(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
