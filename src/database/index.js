const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Group = require('../models/Group')
const Student = require('../models/Student')

const database = new Sequelize(dbConfig)

Group.init(database)
Student.init(database)

Student.associate(database.models)
Group.associate(database.models)

module.exports = database