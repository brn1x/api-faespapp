const { Model, DataTypes } = require('sequelize')

class StudentGroups extends Model {
  static init(sequelize) {
    super.init({
      groupId: {
        type: DataTypes.INTEGER,
        references: { model: 'Groups', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      studentId: {
        type: DataTypes.INTEGER,
        references: { model: 'Students', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    }, {
      sequelize
    })
  }
}

module.exports = StudentGroups