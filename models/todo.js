const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/connection")

module.exports = sequelize.define("Todo", {
  // Todoテーブル
  id: {
    type: DataTypes.UUID, // 文字列型
    allowNull: false, // Not Null
    primaryKey: true,
  },
  completedFlag: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(1024),
  },
  user: {
    type: DataTypes.STRING(255),
    allowNull: false,
    references: {
      model: "Users",
      key: "name",
    },
  },
  deleteFlag: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});
