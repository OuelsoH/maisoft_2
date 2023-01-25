const {
	createUser,
	readUserById,
	updateUser,
	deleteUser,
	readUser,
} = require('../models/user');

const getUserByIdController = (req, res) => {
	const id = req.params.id;
	readUserById(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1 });
		}
	});
};

const deleteUserController = (req, res) => {
	const id = req.params.id;
	deleteUser(id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1 });
		}
	});
};

const getUsersController = (req, res) => {
	const id = req.params.id;
	readUser( (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1 });
		}
	});
};

const postUserController = async (req, res) => {
	const body = req.body;
	createUser(body, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1 });
		}
	});
};

const patchUserController = (req, res) => {
	const data = req.body;
	updateUser(data, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: 1 });
		}
	});
};

module.exports = {
	getUsersController,
	getUserByIdController,
	postUserController,
	patchUserController,
	deleteUserController,
};
