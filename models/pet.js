const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = include("/databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);
const petModel = sequelize.define(
    "pet",
    {
      pet_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      web_user_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'web_user', key: 'web_user_id' } },
      name: { type: Sequelize.STRING, allowNull: false },
      pet_type_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'pet_type', key: 'pet_type_id' } },
    },
    {
      tableName: "pet",
      timestamps: false,
      singular: "pet",
      plural: "pet",
    }
  );
  module.exports = petModel;