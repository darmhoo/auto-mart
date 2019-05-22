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
      message: 'field missing',
    });
  }
}


module.exports = {
  checkFieldsPost,
};
