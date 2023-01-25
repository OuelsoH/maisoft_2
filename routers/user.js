const { Router } = require('express');
const {
	deleteUserController,
	getUserByIdController,
	patchUserController,
	postUserController,
	getUsersController,
} = require('../controllers/user');

const router = Router();

router.get('/', getUsersController);
router.get('/:id', getUserByIdController);
router.post('/', postUserController);
router.patch('/', patchUserController);
router.delete('/:id', deleteUserController);

module.exports = router;
