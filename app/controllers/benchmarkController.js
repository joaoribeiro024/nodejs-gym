const benchmarkService = require('../services/benchmarkService');

exports.getAll = (req, res) => {
  const benchmarks = benchmarkService.getAll();
  res.json(benchmarks);
};

exports.getById = (req, res) => {
  const benchmark = benchmarkService.getById(req.params.id);
  res.json(benchmark);
};
