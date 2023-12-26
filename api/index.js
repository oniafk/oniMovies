const express = require('express');
const cors = require('cors');
const app = express();

const routerAPIRequest = require('./routes/index.js');

app.get('/api-key', (req, res) => {
  res.send(process.env.API_KEY);
});

routerAPIRequest(app);

const PORT = process.env.PORT || 3000;

const whiteList = [
  'https://oni-movies-frontend.vercel.app',
  'https://oni-movies-frontend-pu20316ey-manuel-arias-projects.vercel.app',
  'https://oni-movies-frontend-git-main-manuel-arias-projects.vercel.app/',
  'https://oni-movies-frontend.vercel.app/',
  'https://oni-movies-frontend-pu20316ey-manuel-arias-projects.vercel.app/',
  'https://oni-movies-frontend-git-main-manuel-arias-projects.vercel.app/',
];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by CORS'));
    }
  },
};
app.use(cors(options));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
