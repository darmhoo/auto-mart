const expressJwt = require('express-jwt');

const { secret } = require('../config.json');

function checkFieldsPost(req, res, next) {
  const {
    firstname,
    lastname,
    password,
    email,
    isAdmin,
  } = req.body;

  if (firstname && lastname && password && email && isAdmin) {
    next();
  } else {
    res.status(400).json({
      status: 400,
      message: 'field missing or email exists',
    });
  }
}

function authorize(roles = []) {
  if (typeof roles === 'string') {
    roles = [roles];
  }
  return [
    expressJwt({ secret }),

    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      next();
    },
  ];
}
module.exports = {
  authorize,
  checkFieldsPost,


};
