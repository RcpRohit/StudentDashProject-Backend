const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../config/db');
const path = require('path');
const studentRoutes = require('../routes/students');
const couseRoutes = require('../routes/courses')
dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

app.use('/api/course',couseRoutes);

app.get('/', (req, res) => {
    res.send('Internship Portal Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
