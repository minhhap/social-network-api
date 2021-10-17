const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
  .get(getAllThought)
  .post(addThought);

// /api/thoughts/<thoughtId>
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;