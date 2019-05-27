const jwt = require('jsonwebtoken');
const config = require('../config.json');

const Role = require('../helpers/role');

const userData = require('../data/users.json');


async function authenticate({ email, password }) {
  const user = userData.find(u => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      token,
    };
  }
}

async function getAll() {
  return userData.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}

async function getById(id) {
  const user = userData.find(u => u.id === parseInt(id, 10));
  if (!user) return;
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

module.exports = { authenticate, getAll, getById };
