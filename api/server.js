const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const encouragementRouter = require('../routes/encouragement/encouraging-route');
const userRouter = require('../routes/users/user-router');

server.get('/api/encouragement', encouragementRouter);
server.get('/api/user', userRouter);

server.get('/', (req, res) => {
  res.send('API up ...');
})

module.exports = server;