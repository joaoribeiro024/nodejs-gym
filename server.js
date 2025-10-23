const express = require('express');
const app = express();
app.use(express.json());

const classRoutes = require('./app/routes/classRoute');
const userRoutes = require('./app/routes/userRoute.js');
const benchmarkRoutes = require('./app/routes/benchmarkRoute');

app.use('/users', userRoutes);
app.use('/classes', classRoutes);
app.use('/benchmarks', benchmarkRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
