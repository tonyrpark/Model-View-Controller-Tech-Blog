// User Model Creation

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../__tests__/config/connection");
const bcrypt = require("bcrypt");

// Creates User Model
class User extends Model {
  //checkPassword sequence
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

// User defined columns
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // Password with at least a length of four, in a real application this would have more stringent requirements
        len: [4],
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // Sets up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    // Passes in imported sequelize connection
    sequelize,
    // Does not automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    freezeTableName: true,
    // Uses underscores for naming convention instead of camelCase
    underscored: true,
    // modelName stays in lowercase in the database
    modelName: "user",
  }
);

module.exports = User;
