module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface
        .createTable('campaigns', {
          id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          start_date: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          end_date: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          limit_hour_start: {
            type: Sequelize.TIME,
            allowNull: false,
          },
          limit_hour_end: {
            type: Sequelize.TIME,
            allowNull: false,
          },
          owner_user: {
            type: Sequelize.INTEGER,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
          },
          finished_date: {
            type: Sequelize.DATE,
            allowNull: true,
          },
          created_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
          },
        })
        .then(function () {
          queryInterface.createTable('user_campaign_pointer', {
            campaign_id: {
              type: Sequelize.INTEGER,
              references: { model: 'campaigns', key: 'id' },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
              allowNull: false,
            },
            user_id: {
              type: Sequelize.INTEGER,
              references: { model: 'users', key: 'id' },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
              allowNull: false,
            },
            created_at: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
            },
          });
        }),
      queryInterface.createTable('user_client_campaign', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        campaign_id: {
          type: Sequelize.INTEGER,
          references: { model: 'campaigns', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }),
      queryInterface.createTable('points', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        user_client_campaign_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        },
        provider_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }),
    ]);
  },

  down: queryInterface => {
    return Promise.all([
      queryInterface.dropTable('campaigns'),
      queryInterface.dropTable('user_campaign_pointer'),
      queryInterface.dropTable('user_client_campaign'),
      queryInterface.dropTable('points'),
    ]);
  },
};
