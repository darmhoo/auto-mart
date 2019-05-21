const express = require('express');

const router = express.Router();
const user = require('../models/users');
const m = require('../helpers/middlewares');

/* GET users listing. */
router.post('/signup', m.checkFieldsPost, async (req, res) => {
  const { id } = req.params;
  await user.insertUser(req.body).then(person => res.status(201).json({
    status: 201,
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

module.exports = router;

router.get('/signin', (req, res, next) => {
  res.send('this is a post request');
});
