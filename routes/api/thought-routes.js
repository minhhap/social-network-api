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

// /api/thoughts/<thoughtId>/reactions
router.route('/thoughts/:thoughtId/reactions')
  .post(addReaction);   

// /api/thoughts/<thoughtId>/<reactionId>
router.route('/thoughts/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;