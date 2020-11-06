import Sequelize from 'sequelize';

import User from '../app/models/User';
import Campaign from '../app/models/Campaign';

import databaseConfig from '../config/database';

const models = [User, Campaign];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
