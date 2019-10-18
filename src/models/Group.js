const { Model, DataTypes } = require('sequelize')

class Group extends Model {
  static init(sequelize) {
    super.init({
      nmGrupo: DataTypes.STRING,
      qtdMinP: DataTypes.INTEGER,
      qtdMaxP: DataTypes.INTEGER,
      qtdEnc: DataTypes.INTEGER,
      tpGrupo: DataTypes.STRING,
      descGrupo: DataTypes.STRING,
      objGrupo: DataTypes.STRING,
      situacao: DataTypes.STRING
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Student, { foreignKey: 'groupId', through: 'StudentGroups', as: 'students' })
  }
}

module.exports = Group