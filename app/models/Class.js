const classes = [
  { id: 1, name: "Yoga", instructor: "Ana" },
  { id: 2, name: "Pilates", instructor: "Bruno" },
  { id: 3, name: "Zumba", instructor: "Carlos" },
];

exports.getAll = () => classes;

exports.getClassById = (id) => classes.find((c) => c.id === parseInt(id));
