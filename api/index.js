const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../config/db');
const studentRoutes = require('../routes/students');
const courseRoutes = require('../routes/courses');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/course', courseRoutes);

app.get('/', (req, res) => {
    res.send('Internship Portal Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ${PORT})'))