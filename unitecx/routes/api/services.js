const express = require('express');
const router = express.Router();
const Service = require('../../models/Service');
const { check, validationResult } = require('express-validator');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/servicefiles');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

// Posting Services...
// POST api/posts private
router.post(
  '/',
  [
    upload.single('file'),
    [
      check('name', 'Name is Required')
        .not()
        .isEmpty(),
      check('bio', 'add short Bio')
        .not()
        .isEmpty(),
      check('description', 'Describe Services First')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, description, bio } = req.body;
    const url = req.protocol + '://' + req.get('host');
    let file = '';
    if (req.file)
      file = url + '/public/images/servicefiles/' + req.file.filename;
    console.log(req.file);
    try {
      const serviceData = {
        name,
        description,
        bio,
        file
      };
      const service = new Service(serviceData);

      res.status(200).json(service);
      await service.save();
    } catch (err) {
      console.log(err);
      res.status(500).json('server error');
    }
  }
);

// Getting All Services...
// GET api/posts public

router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    if (!services) {
      res.status(400).json('No services Found');
    }
    res.status(200).json(services);
  } catch (err) {
    console.log(err);
    res.status(500).json('server error');
  }
});

// Getting Service By Id...
// GET api/posts/:id public
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(400).json({ error: 'not found...' });
    }
    res.status(200).json(service);
  } catch (err) {
    console.log(err);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ error: 'not found...' });
    }
    res.status(500).json('server error');
  }
});
// Updating Service
// Update Put /api/services private

router.put(
  '/',
  [
    check('name', 'name is required')
      .not()
      .isEmpty(),
    check('description', 'describe service')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { _id, name, description } = req.body;
    try {
      const update = await Service.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            name,
            description
          }
        },
        {
          new: true
        }
      );
      if (!update) {
        return res.status(400).json('sorry Not Updated');
      }
      res.status(200).json(update);
    } catch (err) {
      console.log(err);
      if (err.kind == 'ObjectId') {
        return res.status(400).json('service not Found');
      }
    }
  }
);

// Deleting Service
// Delete /api/services private

router.delete('/', async (req, res) => {
  const { _id } = req.body;
  try {
    await Service.findOneAndRemove({ _id: _id });
    res.status(200).json('service deleted');
  } catch (err) {
    console.log(err);
    if (err.kind == 'ObjectId') {
      return res.status(400).json('service not found');
    }
    res.status(500).json('server error');
  }
});

module.exports = router;
