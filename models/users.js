const users = require('../data/users.json');


const helper = require('../helpers/helper');

function insertUser(newUser) {
  return new Promise((resolve, reject) => {
    const id = { id: helper.getNewId(users) };
    const date = {
      createdAt: helper.newDate(),
      updatedAt: helper.newDate(),
    };
    const token = { token: helper.tokenGen() };
    newUser = {
      ...id,
      ...date,
      ...newUser,
      ...token,
    };
    users.push(newUser);
    helper.writeJSONFile('data/users.json', users);
    resolve(newUser);
  });
}


module.exports = {
  insertUser,

};
