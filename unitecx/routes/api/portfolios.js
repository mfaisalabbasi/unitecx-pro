const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Portfolio = require('../../models/Porfolio');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/portfoliofiles');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

// posting PortFolios
// Post api/portfolio private
router.post(
  '/',
  [
    upload.single('file'),
    [
      check('name', 'Enter Portfolio Name')
        .not()
        .isEmpty(),
      check('bio', 'Enter short bio')
        .not()
        .isEmpty(),
      check('description', 'Describe PortFolio In Details')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.file);
    const { name, description, bio } = req.body;
    const url = req.protocol + '://' + req.get('host');
    let file = '';
    if (req.file)
      file = url + '/public/images/portfoliofiles/' + req.file.filename;
    try {
      const portfolioData = { name, description, bio, file };
      const portfolio = new Portfolio(portfolioData);
      res.status(200).json(portfolio);
      await portfolio.save();
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error!!!');
    }
  }
);

// Getting All Posts
// Get /api/portfolios public

router.get('/', async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

// Getting single Post
// Get /api/portfolios/:id public
router.get('/:id', async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(400).json({ error: 'not found...' });
    }
    res.status(200).json(portfolio);
  } catch (err) {
    console.log(err);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ error: 'not found...' });
    }
    res.status(500).json('Server Error');
  }
});

// Deleting portfolio
// Delete /api/portfolios/

router.delete('/', async (req, res) => {
  const { _id } = req.body;
  try {
    await Portfolio.findOneAndRemove({ _id: _id });
    res.status(200).json('PortFolio Deleted');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

// Updating Portfolios
// put /api/portfolio private
router.put(
  '/',
  [
    check('name', 'name is required')
      .not()
      .isEmpty(),
    check('description', 'describe portfolio')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, description, _id } = req.body;
    try {
      const UpdatePortfolio = await Portfolio.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            name,
            description
          }
        },
        { new: true }
      );
      res.status(200).json(UpdatePortfolio);
    } catch (err) {
      console.log(err);
      res.status(500).json('server error');
    }
  }
);

module.exports = router;
