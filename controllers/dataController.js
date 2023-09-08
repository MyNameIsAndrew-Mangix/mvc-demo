const express = require('express');
const router = express.Router();
const dataModel = require('../models/dataModel');

// Define routes for your controller
router.get('/', (req, res) => {
  const data = dataModel.readData();
  res.json(data);
});

module.exports = router;
