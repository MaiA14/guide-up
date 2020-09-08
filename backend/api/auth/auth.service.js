const bcrypt = require("bcrypt");
const logger = require("../../services/logger.service");
const guidsService = require("../../api/guide/guide.service.js");

const saltRounds = 10;

async function login(name, password) {
  logger.debug(`auth.service - login with name: ${name}`);

  if (!name || !password) {
    return Promise.reject("email and password are required!");
  }
  const user = await guidsService.getGuideByUserName(name);

  if (!user) return Promise.reject("Invalid email or password");
  const match = await bcrypt.compare(password, user.password);

  if (!match) return Promise.reject("Invalid email or password");

  delete user.password;
  return user;
}
async function signup(email, password, username) {
  const hash = await bcrypt.hash(password, saltRounds);
}

module.exports = {
  signup,
  login,
};
