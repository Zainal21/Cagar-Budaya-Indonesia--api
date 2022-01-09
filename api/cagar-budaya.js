const path = require('path')
const fs = require('fs').promises

module.exports = async (req, res) => {
  const {
    kode_wilayah
  } = req.query
  if (!kode_wilayah) {
    res.status(422).send({
      status: 422,
      message: "please input region code"
    });
  } else {
    const fileJson = path.join(__dirname, '..', 'data/', kode_wilayah + '.json')
    const data = await fs.readFile(fileJson, 'utf-8')
    const JsonResult = JSON.parse(data)
    res.status(200).send(JsonResult)
  }
}