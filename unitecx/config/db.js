const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('database is connected');
  } catch (err) {
    process.exit(1);
    console.log(err.msg);
    console.log('Db Connection Failed!!!');
  }
};

module.exports = connectDb;
