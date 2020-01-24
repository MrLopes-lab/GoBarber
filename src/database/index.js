import Sequelize from 'sequelize';
import Mongoose from 'mongoose';

import User from '../app/models/User';
import Files from '../app/models/Files';
import Appointments from '../app/models/Appointments';

import databaseConfig from '../config/database';

const models = [User, Files, Appointments];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = Mongoose.connect(
      'mongodb://localhost:27017/gobarber',
      { useNewUrlParser: true, useFindAndModify: true }
    );
  }
}

export default new Database();
