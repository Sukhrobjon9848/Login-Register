const { use } = require("../routes/todos");

const registerValidator = (req, res, next) => {
	const { username, password, birthdate, gender } = req.body;
	const dateRegex =
		/^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/.test(
			birthdate
		);
	try {
		if (!username) throw new Error("Username is required!");
		if (!password) throw new Error("Password is required!");
		if (!birthdate) throw new Error("Birthdate is required!");
		if (!gender) throw new Error("Gender is required!");

		if (
			username.length < 2 ||
			username.length > 16 ||
			typeof username !== "string"
		) {
			throw new Error("Invalied userName!");
		}
		if (
			password.length < 4 ||
			password.length > 16 ||
			!/[A-Za-z]/.test(password) ||
			!/[0-9]/.test(password)
		) {
			throw new Error("Password userName!");
		}
		if (!dateRegex) {
			throw new Error("Invalied dataBirth");
		}
		if (!(+gender == 1 || +gender == 2)) {
			throw new Error("Invalied gender");
		}
		return next();
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};








// const loginValidator = (req, res, next) => {
// 	const { username, password} = req.body;
// 	const users= req.select('todo')
// 	 const file= users.find(user=> user.username===username && user.password===password)
// 	try {
// 		if (!username) throw new Error("Username is required!");
// 		if (!password) throw new Error("Password is required!");
// 		if(!file) throw new Error("Username or password")

		
// 		return next();
// 	} catch (error) {
// 		res.status(400).json({ message: error.message });
// 	}
// };


module.exports = {
	registerValidator,
};
