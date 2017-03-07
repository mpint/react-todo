require('./_babel');
var colors = require('colors');
const createServer = require('config/createServer').default;
const env = require('config/env');

createServer().then(app => {
  app.listen(env.PORT, () => {
    console.log(`Boilerplate API online → http://localhost:${env.PORT} → ${process.env.NODE_ENV} `.bgGreen.black, '\n');
  });
}, (err) => {
  console.error(err.stack);
  process.exit(1);
});
