const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

exports.getAll = () => users;

exports.getById = id => users.find(u => u.id === parseInt(id));
