const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Group = require('../models/Group')
const Student = require('../models/Student')
const StudentGroup = require('../models/StudentGroups')

const database = new Sequelize(dbConfig)

Group.init(database)
Student.init(database)
StudentGroup.init(database)

Student.associate(database.models)
Group.associate(database.models)

async function init (){
  await Group.sync({ force: true })
  await Student.sync({ force: true })
  await StudentGroup.sync({ force: true })
}

//init()

module.exports = database