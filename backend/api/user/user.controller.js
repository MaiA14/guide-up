const userService = require('./user.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}
  
async function getUsers(req, res) {
    const users = await userService.query(req.query)
    res.send(users)
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.end()
}

async function updateUser(req, res) {
    const user = req.body;
    const id = req.params.id
    await userService.update(id, user)
    res.send(user)
}

async function addUser(req, res) {
    var user = req.body;
    user = await userService.add(user)
    res.send(user)
}

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser,
	addUser
}