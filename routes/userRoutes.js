const express = require('express');
const userController = require('../controllers/userController.js')
const router = express.Router();

router
  .route('/')
  .get(userController.get)
  .post(userController.post);

router
 .route('/:id')
 .get(userController.getId);

 module.exports = router;

