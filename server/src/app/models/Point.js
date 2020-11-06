import Sequelize, { Model } from 'sequelize';

class Point extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        provider_id: Sequelize.INTEGER,
        user_client_campaign_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async point => {
      if (point) {
        try {
          console.log(JSON.stringify(point));
          // eslint-disable-next-line prettier/prettier
        } catch (e) {}
      }
    });

    return this;
  }
}

export default Point;
