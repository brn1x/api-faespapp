const { Model, DataTypes } = require('sequelize')

class Student extends Model {
  static init(sequelize) {
    super.init({
      raStudent: DataTypes.STRING,
      passStudent: DataTypes.STRING,
      nmStudent: DataTypes.STRING,
      period: DataTypes.INTEGER,
      curso: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Group, { foreignKey: 'studentId', through: 'StudentGroups', as: 'groups' })
  }
}

module.exports = Student