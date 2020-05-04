
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const server = require('./api/server');
const port = process.env.PORT || 3300;
const host = process.env.HOST || localhost;

server.listen(port, host, () => {
  console.log(`\n** Running on ${host}:${port}`);
});