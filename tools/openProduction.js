process.env.NODE_ENV = 'production';

const open = require('open');
const port = require('../src/server/config/env').PORT;

open(`http://localhost:${port}`);
