const Group = require('../models/Group')

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
  }
}