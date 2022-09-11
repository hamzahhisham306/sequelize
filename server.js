'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const foodRouter = require('./routes/food.routes');

app.use(cors());
app.use(express.json());
app.use(foodRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Home page',
    code: 200
  })
})

function start(port) {
  app.listen(port, () => console.log(`Up an running on port ${port}`));
}

module.exports = {
  start
};