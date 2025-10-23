exports.getAll = (req, res) => {
  const users = userService.getAll();
  res.json(users);
};

exports.getById = (req, res) => {
  const users = userService.getUserById(req.params.id);
  res.json(classes);
};
