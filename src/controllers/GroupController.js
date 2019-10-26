const Group = require('../models/Group')
const Student = require('../models/Student')

module.exports = {
  async store(req, res) {
    const { nmGrupo,
    qtdMinP,
    qtdMaxP,
    qtdEnc,
    tpGrupo,
    descGrupo,
    objGrupo,
    situacao } = req.body

    const group = await Group.create({ nmGrupo,
      qtdMinP,
      qtdMaxP,
      qtdEnc,
      tpGrupo,
      descGrupo,
      objGrupo,
      situacao
    })

    return res.json(group)
  },

  async getAll(req, res) {
    const groups = await Group.findAll();

    return res.json(groups)
  },

  async getQttStudents(req, res) {
    const { groupid } = req.params
    await Group.findAndCountAll({
      where: { id: groupid },
      include: [{
        model: Student,
        as: 'students'
      }]
    })
      .then(data => {
        console.log(data.count)
        res.json(data.count)
      })
      .catch(() => res.sendStatus(400))
  }
}