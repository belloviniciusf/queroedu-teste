const Sequelize = require('sequelize');

const config = require('../config/database');

const Campus = require('../app/models/Campus');
const City = require('../app/models/City');
const Country = require('../app/models/Country');
const Course = require('../app/models/Course');
const Kind = require('../app/models/Kind');
const Level = require('../app/models/Level');
const Offer = require('../app/models/Offer');
const Shift = require('../app/models/Shift');
const State = require('../app/models/State');
const University = require('../app/models/University');
const User = require('../app/models/User');

const models = [Campus, City, Country, Course, Kind, Level, Offer, Shift, State, University, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();
