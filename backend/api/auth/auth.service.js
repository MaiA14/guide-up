const bcrypt = require('bcrypt')
// const userService = require('../user/user.service')
const logger = require('../../services/logger.service')
const guidsService = require('../../api/guide/guide.service.js')

const saltRounds = 10

async function login(name, password) {
    console.log('name ',name)
    logger.debug(`auth.service - login with name: ${name}`)

    if (!name || !password) {
        return Promise.reject('email and password are required!')

    }
    const user = await guidsService.getGuideByUserName(name)

    if (!user) return Promise.reject('Invalid email or password')
    const match = await bcrypt.compare(password,user.password)
    console.log(match)

    if (!match) return Promise.reject('Invalid email or password')


    delete user.password;
    return user;
}
async function signup(email, password, username) {
    // logger.debug(`auth.service - signup with email: ${email}, username: ${username}`)
    // if (!email || !password || !username) return Promise.reject('email, username and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    // return userService.add({ email, password: hash, username })
}

module.exports = {
    signup,
    login,
}