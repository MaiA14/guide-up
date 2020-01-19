const fs = require('fs')
const utilsService = require('../../services/utils.service.js');

module.exports = {
    remove,
    addUser,
    getById,
    update,
    query
};

let gUsers = require('../data/users.json')

function query(filterBy) {
    var res = gUsers;
    return Promise.resolve(res);
}

function getById(userId) {

    const user = gUsers.find(user => user._id === userId)
    if (user) return Promise.resolve(user)
    else return Promise.reject('wrong ID')
}

function update(id, newUser) {
    let user = gUsers.find(user => user._id === id)
    let idx = gUsers.findIndex(user => user._id === id)
    if (!user) return Promise.reject('Wrong Id');
    let newUserData = { ...user, ...newUser }
    if (idx === 0) {
        gUsers =
        [
            newUserData,
            ...gUsers.splice(1 + idx)
        ]
    } else {
        gUsers = [
            ...gUsers.splice(0, idx),
            newUserData,
            ...gUsers.splice(0 + idx)
        ]
    }
    _saveUsersToFile()
    return Promise.resolve(user)
}

function addUser(user) {
    const newUser = {_id:utilsService.getRandomID(),username: user.username, fullname: user.fulllname, password: user.password, imgUrl: user.imgUrl}
    gUsers.push(newUser)
    _saveUsersToFile()
    return Promise.resolve(newUser)
}

function remove(userId) {
    let userIdx = gUsers.findIndex((currUser) => currUser.id === userId)
    if (userIdx === -1) return Promise.reject('Wrong Id');
    gUsers.splice(usersIdx, 1);
    _saveUsersToFile()
    return Promise.resolve(true)
}

function _saveUsersToFile() {
    fs.writeFile('data/users.json', JSON.stringify(gUsers, null, 2), () => { console.log('filllle'); });
}