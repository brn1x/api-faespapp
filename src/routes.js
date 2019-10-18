const express = require('express')
const GroupController = require('./controllers/GroupController')
const StudentController = require('./controllers/StudentController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.sendFile(__dirname+"/pages/index.html");
});

routes.post('/groups', GroupController.store)
routes.get('/groups', GroupController.getAll)

routes.post('/students', StudentController.store)
routes.get('/students', StudentController.getAll)

routes.post('/groups/:groupid/student', StudentController.subscribeGroup)
routes.delete('/groups/:groupid/student', StudentController.unsubscribeGroup)

routes.get('/groups/student/:raStudent', StudentController.subscribedGroups)

module.exports = routes