const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

require('express-async-errors');
require('dotenv/config');

// Load routes
const routes = require('./app/routes/index');

// Load models
require('./database');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.server.use(routes);
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.exceptionHandler();
    this.server.use(errors());
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json({ limit: '50mb' }));
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(err);
        return res.status(500).send(err);
      }
      return res.status(500).json({ error: 'Internal server Error' });
    });
  }
}

module.exports = new App().server;
