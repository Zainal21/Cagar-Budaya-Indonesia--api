
const path = require('path')
const fs = require('fs').promises
const fileJson = path.join(__dirname, '..', 'data/', 'intro.json')

module.exports = async (_, res) => {
    const data = await fs.readFile(fileJson, 'utf-8')
    const JsonResult = JSON.parse(data)
    res.status(200).send(JsonResult)
}