
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

const server = require('./api/server');
// const port = process.env.PORT || 3300
const port = 5000;
server.listen(port, () => {
  console.log(`\n** Running on port ${port}`);
});