const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ error: 'no token, authrization denied' });
  }
  try {
    jwt.verify(token, config.get('secKey'));
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: `token isn't valid` });
  }
  next();
};
