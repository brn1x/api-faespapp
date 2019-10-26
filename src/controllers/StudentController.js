const Student = require('../models/Student')
const Group = require('../models/Group')

module.exports = {
  async store (req, res) {
    const { raStudent,
      passStudent,
      nmStudent,
      period,
      curso } = req.body

    const student = await Student.create({ raStudent, 
      passStudent, 
      nmStudent, 
      period, 
      curso
    })

    res.json(student)
  },

  async getAll(req, res) {
    const student = await Student.findAll()

    res.json(student)
  },

  async subscribeGroup(req, res) {
    const { groupid } = req.params
    const { raStudent } = req.body

    const group = await Group.findByPk(groupid)

    if(!group){
      res.sendStatus(400).json({ err: 'Group not found' })
    }

    const student = await Student.findOne({ where: { raStudent } })

    await group.addStudent(student)

    return res.json({ message: 'ok' })
  },

  async unsubscribeGroup(req, res) {
    const { groupid } = req.params
    const { raStudent } = req.body

    const group = await Group.findByPk(groupid)

    if(!group){
      res.sendStatus(400).json({ err: 'Group not found' })
    }

    const student = await Student.findOne({ where: { raStudent } })

    await group.removeStudent(student)

    return res.sendStatus(200)
  },

  async subscribedGroups (req, res) {
    const { raStudent } = req.params

    const student = await Student.findOne({ where: { raStudent },
    include: {
      association: 'groups',
      through: { attributes: [] }
    }})

    return res.json(student.groups)
  },

  async isRegistered (req, res) {
    const { raStudent, groupid } = req.params

    await Student.count({ where: { raStudent },
    include: [{
      model: Group,
      as: 'groups',
      where: { id: groupid }
    }] })
      .then(data => {
        res.json(data)
      })
      .catch(() => res.sendStatus(400))
  }
}