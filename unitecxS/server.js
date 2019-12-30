const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require('./config/db');

connectDb();
app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.get('/', (req, res) => {
  res.status(200).json(`Welcome to Restful Api's`);
});

app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/portfolios', require('./routes/api/portfolios'));
app.use('/api/services', require('./routes/api/services'));
app.use('/api/user', require('./routes/api/user'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`app is ruunig on port ${PORT}`));
