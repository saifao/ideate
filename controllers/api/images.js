const Image = require('../../models/image')

module.exports = { getAll }

async function getAll(req, res) {
    const images = await Image.find({}).populate('project').exec()
    res.json(images)
}