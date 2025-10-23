const classService = require('../services/classService');

exports.getAll = (req, res) => {
  const classes = classService.getAll();
  res.json(classes);
};

exports.getById = (req, res) => {
  const classes = classService.getClassById(req.params.id);
  res.json(classes);
};
