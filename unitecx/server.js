const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require('./config/db');
const path = require('path');

const PORT = process.env.PORT || 5000;
connectDb();
app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/portfolios', require('./routes/api/portfolios'));
app.use('/api/services', require('./routes/api/services'));
app.use('/api/user', require('./routes/api/user'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dir, 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => console.log(`app is ruunig on port ${PORT}`));
