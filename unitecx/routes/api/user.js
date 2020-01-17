const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// Register
router.post(
  '/register',
  [
    check('name', 'Enter your Password')
      .not()
      .isEmpty(),
    check('email', 'Enter valid Email').isEmail(),
    check('password', 'Enter secure password').isLength({ min: 5 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'email is already in use' }] });
      }
      const userData = {
        name,
        email,
        password
      };
      const register = new User(userData);
      //bcrypt hashing password
      const salt = await bcrypt.genSalt(10);
      register.password = await bcrypt.hash(password, salt);
      await register.save();
      // jwt implementation
      const payload = {
        id: register.id
      };
      jwt.sign(
        payload,
        config.get('secKey'),
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json('server error');
    }
  }
);

//Sign In
router.post('/loging', async (req, res) => {
  const { email, password } = req.body;
  const valid = await User.findOne({ email: email });
  if (!valid) {
    return res.status(400).json({ error: 'Invalid credentials...' });
  }
  const match = await bcrypt.compare(password, valid.password);
  if (!match) {
    return res.status(400).json({ error: 'Invalid credentials...' });
  }
  // jwt implementaion
  const payload = { id: valid.id };
  jwt.sign(
    payload,
    config.get('secKey'),
    { expiresIn: '1hr' },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
});

module.exports = router;
