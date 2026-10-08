const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.post('/', taskController.create);
router.get('/', taskController.list);
router.get('/:id', taskController.getById);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.remove);

module.exports = router;