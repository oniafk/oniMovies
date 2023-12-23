const express = require('express');
const app = express();
const path = require('path');
const routerAPIRequest = require('./server/routes/index.js');

app.get('/api-key', (req, res) => {
  res.send(process.env.API_KEY);
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

routerAPIRequest(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
