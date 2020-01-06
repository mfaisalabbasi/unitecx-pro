const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');
const { check, validationResult } = require('express-validator');
const multer = require('multer');
const auth = require('../../middleware/auth');
const nodemailer = require('nodemailer');
require('dotenv').config();

//multer section for uploading files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/projectfiles');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now());
  }
});
const upload = multer({ storage: storage });
//posting project
// public /api/projects  post
router.post(
  '/',
  [
    upload.single('file'),
    [
      check('name', 'Enter Your Name')
        .not()
        .isEmpty(),
      check('email', 'Enter valid Email').isEmail(),
      check('phone', 'Enter Valid Phone')
        .not()
        .isEmpty()
        .isNumeric(),
      check('protype', 'Enter Project Type')
        .not()
        .isEmpty(),
      check('description', 'Enter Project Description')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    console.log(req.file);
    const { name, email, phone, protype, description } = req.body;
    const url = req.protocol + '://' + req.get('host');
    let file = '';
    if (req.file)
      file = url + '/public/images/projectfiles/' + req.file.filename;
    try {
      const newproject = {
        name,
        email,
        phone,
        protype,
        description,
        file
      };
      //checking is email is Already
      const validEmail = await Project.findOne({ email: email });
      if (validEmail) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Email is already in use' }] });
      }
      const project = new Project(newproject);
      await project.save();

      //Node mailing setups...

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      transporter.sendMail(
        {
          from: '"Unitecx Services" <mf09054@gmail.com>', // sender address
          to: email, // list of receivers
          subject: 'Thanks for submitting project to unitecx', // Subject line
          html: `<h1>Welcome,${name}</h1><p>Thanks for submitting order to unitecx services. we are here for you to provide our best services. After reviewing your project our experts will contact you on this email address ,<b>${email}</b> or on your contact number <b>${phone}</b>. <h3>Thanks Unitecx</h3></p>`
        },
        (error, info) => {
          if (error) {
            console.log(error);
          }
          console.log(info);
        }
      );

      res.status(200).json(project);
    } catch (err) {
      console.log(err);
      res.status(500).json('server error occured...');
    }
  }
);

// Update Project
// private /api/projects put
router.put(
  '/',
  [
    check('name', 'Enter Your Name')
      .not()
      .isEmpty(),
    check('email', 'Enter valid Email').isEmail(),
    check('phone', 'Enter Valid Phone')
      .not()
      .isEmpty()
      .isNumeric(),
    check('protype', 'Enter Project Type')
      .not()
      .isEmpty(),
    check('description', 'Enter Project Description')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, protype, description, _id } = req.body;
    const updateProject = {};
    updateProject._id = _id;
    if (name) updateProject.name = name;
    if (email) updateProject.email = email;
    if (phone) updateProject.phone = phone;
    if (protype) updateProject.protype = protype;
    if (description) updateProject.description = description;
    try {
      const upd = await Project.findOneAndUpdate(
        {
          _id: _id
        },
        {
          $set: updateProject
        },
        {
          new: true
        }
      );

      res.status(200).json(upd);
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  }
);

// Delete Project
// private /api/projects Delete

router.delete('/', async (req, res) => {
  const { _id } = req.body;
  try {
    const delpro = await Project.findOneAndRemove({ _id: _id });
    if (!delpro) {
      res.status(400).json('Unable to Delete');
    }
    res.status(200).json('project Deleted');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

// getting All Projects
// /api/projects get public

router.get('/', auth, async (req, res) => {
  try {
    const Projects = await Project.find();
    res.status(200).json(Projects);
  } catch (err) {
    console.log(err);
    res.status(500).json('server error');
  }
});

//get Project By Id
router.get('/:id', async (req, res) => {
  try {
    const proById = await Project.findById(req.params.id);
    if (!proById) {
      return res.status(400).json({ error: 'not found...' });
    }
    res.status(200).json(proById);
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ error: 'not found...' });
    }
    console.log(err);
    res.status(500).json('server error');
  }
});
module.exports = router;
