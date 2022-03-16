const router = require('express').Router();

const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

// Set up Post route for adding comments
router
  .route('/:pizzaId')
  .post(addComment);  

// Set up Post route for adding comments
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

  router
  .route('/:pizzaId/:commentId/:replyId')
  .delete(removeReply);
  

  module.exports = router;