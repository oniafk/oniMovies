const express = require('express');
const cors = require('cors');
const app = express();
// const {PrismaClient} = require('@prisma/client')

const routerAPIRequest = require('./routes/index.js');
// const prisma = new PrismaClient();

const whiteList = [
  'https://oni-movies-frontend.vercel.app',
  'https://oni-movies-frontend-pu20316ey-manuel-arias-projects.vercel.app',
  'https://oni-movies-frontend-git-main-manuel-arias-projects.vercel.app/',
  'https://oni-movies-frontend.vercel.app/',
  'https://oni-movies-frontend-pu20316ey-manuel-arias-projects.vercel.app/',
  'https://oni-movies-frontend-git-main-manuel-arias-projects.vercel.app/',
  'https://localhost:10000',
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

routerAPIRequest(app);

app.get('/api-key', (req, res) => {
  res.send(process.env.API_KEY);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
