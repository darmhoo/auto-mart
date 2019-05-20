function mustBeInteger(req, res, next) {
  const { id } = req;
  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({ message: 'ID must be integer' });
  } else {
    next();
  }
}
function checkFieldsPost(req, res, next) {
  // TODO complete this function
  const { title, content, tags } = req.body;

  if (title && content && tags) {
    next();
  } else {
    res.status(400).json({ message: 'fields are not good' });
  }
}

module.exports = {
  mustBeInteger,
  checkFieldsPost,
};
