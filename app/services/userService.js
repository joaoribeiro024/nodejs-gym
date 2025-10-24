const User = require('../models/User');

exports.getAll = () => {
  return User.getAll();
};

exports.getUserById = id => {
  return User.getById(id);
};
