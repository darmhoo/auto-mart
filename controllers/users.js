const userService = require('../services/user');
const middlewares = require('../helpers/middlewares');

const Role = require('../helpers/role');


function signin(req, res, next) {
  userService.authenticate(req.body)
    .then(user => (user ? res.json({
      status: res.statusCode,
      data: {
        token: user.token,
        id: user.id,
        first_name: user.firstname,
        last_name: user.lastname,
        email: user.email,
      },
    }) : res.status(400).json({ message: 'email or password incorrect' }))).catch(err => next(err));
}

module.exports = {
  signin,
};
