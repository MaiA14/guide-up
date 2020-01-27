const guideService = require('./guide.service')

async function getGuide(req, res) {
    const guide = await guideService.getGuideById(req.params.id)
    res.json(guide)
}

async function getGuides(req, res) {
    try {
        const guides = await guideService.query(req.query)

        res.json(guides)
    } catch{
        res.status(500).json({ err })
    }
}

async function addGuide(req, res) {
    var guide = req.body;
    guide = await guideService.add(guide)
    res.send(guide)
}

async function deleteGuide(req, res) {
    await guideService.remove(req.params.id)
    res.end()
}

async function updateGuide(req, res) {
    
    const guide = req.body;
    const id = req.params.id


    const newGuide = await guideService.update(id, guide)
    await res.send(newGuide)
}

module.exports = {
    getGuide,
    getGuides,
    deleteGuide,
    updateGuide,
    addGuide
}