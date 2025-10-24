const userService = require('../services/userService');

exports.getAll = (req, res) => {
  userService.getAll().then(users => {
    res.json(users);
  });
};

exports.getById = (req, res) => {
  userService.getUserById(req.params.id).then(user => {
    res.json(user);
  });
};
