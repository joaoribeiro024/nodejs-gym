const benchmarks = [
  { id: 1, name: 'Benchmark 1', description: 'Description 1' },
  { id: 2, name: 'Benchmark 2', description: 'Description 2' },
  { id: 3, name: 'Benchmark 3', description: 'Description 3' }
];

exports.getAll = () => benchmarks;

exports.getById = id => benchmarks.find(b => b.id === parseInt(id));
