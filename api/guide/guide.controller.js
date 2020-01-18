const guideService = require('./guide.service')

async function getGuide(req, res) {
    const guide = await guideService.getGuideById(req.params.id)
    res.send(guide)
}

async function getGuides(req, res) {
    const guides = await guideService.query(req.query)
    res.send(guides)
}

async function deleteGuide(req, res) {
    await guideService.remove(req.params.id)
    res.end()
}

async function updateGuide(req, res) {
    const guide = req.body;
    const id = req.params.id

    guide = await guideService.update(id, guide)
    res.send(guide)
}

module.exports = {
    getGuide,
    getGuides,
    deleteGuide,
    updateGuide
}