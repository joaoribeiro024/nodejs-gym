const Benchmark = require("../models/Benchmark");

exports.getAll = () => {
  return Benchmark.getAll();
};

exports.getById = (id) => {
  return Benchmark.getAll().find((c) => c.id === parseInt(id));
};
