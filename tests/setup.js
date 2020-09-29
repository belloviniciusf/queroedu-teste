const jwt = require('jsonwebtoken');
const server = require('../src/index');
const authConfig = require('../src/config/auth');

global.auth = jwt.sign({}, authConfig.secret, { expiresIn: authConfig.expiresIn });
global.server = server;
