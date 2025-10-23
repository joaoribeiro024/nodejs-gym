exports.getAll = () => {
  return Class.getAll();
};

exports.getById = (id) => {
  return Class.getAll().find((c) => c.id === parseInt(id));
};
