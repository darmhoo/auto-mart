const express = require('express');

const router = express.Router();
const user = require('../models/users');
const m = require('../helpers/middlewares');
const authenticate = require('../controllers/users');

/* GET users listing. */
router.post('/signup', m.checkFieldsPost, async (req, res) => {
  await user.insertUser(req.body).then(person => res.status(201).json({
    status: res.statusCode,
    data: {
      token: person.token,
      id: person.id,
      first_name: person.firstname,
      last_name: person.lastname,
      email: person.email,

    },
  }))
    .catch(err => res.status(500).json({
      message: err.message,
      status: err,
    }));
});
router.post('/signin', authenticate.signin);


module.exports = router;
