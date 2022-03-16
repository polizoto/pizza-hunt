const router = require('express').Router();

const {
    addComment,
    removeComment
  } = require('../../controllers/comment-controller');

// Set up Post route for adding comments
router
  .route('/:pizzaId')
  .post(addComment);  

// Set up Post route for adding comments
router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);    

  module.exports = router;