import Sequelize, { Model } from 'sequelize';

class Campaign extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        finished_date: Sequelize.DATE,
        limit_hour_start: Sequelize.TIME,
        limit_hour_end: Sequelize.TIME,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'owner_user', as: 'owner' });
  }
}

export default Campaign;
