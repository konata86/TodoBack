const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection")

module.exports = sequelize.define("User", {
  // Userテーブル
  name: {
    type: DataTypes.STRING(255), // 文字列型
    allowNull: false, // Not Null
    primaryKey: true,
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
