const createUser = (data, callback) => {
	console.log(data);
	callback(null, true);
};

const readUser = (callback) => {
	callback(null, true);
};

const readUserById = (id, callback) => {
	console.log(id);
	callback(null, true);
};

const updateUser = (data, callback) => {
	console.log(data);
	callback(null, true);
};

const deleteUser = (id, callback) => {
	console.log(id);
	callback(null, true);
};

module.exports = {
	createUser,
	readUser,
	readUserById,
	updateUser,
	deleteUser,
};
