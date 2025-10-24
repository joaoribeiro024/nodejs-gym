const userService = require('../services/userService');

exports.getAll = (req, res) => {
  const users = userService.getAll();
  res.json(users);
};

exports.getById = (req, res) => {
  userService.getUserById(req.params.id).then(user => {
    res.json(user);
  });
};
