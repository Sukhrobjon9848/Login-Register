const model = require("../middlewares/model");
const sha256 = require("sha256");
const jwt = require("jsonwebtoken");
const LOGIN = (req, res) => {
	try {
		const { username, password } = req.body;
		const users = req.select("todo");
		const user = users.find(
			(user) => user.username === username && user.password === sha256(password)
		);
		if (!user) throw new Error("Wrong username or password");
		res.status(200).json({
			message: "The user is successfully logged in!",
			token: jwt.sign({ userID: user.userID }, "SECRET_KEY"),
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const REGISTER = (req, res) => {
	try {
		const { username, password, birthdate, gender } = req.body;
		const users = req.select("todo");
		const newUser = {
			userID: users.length ? users[users.length - 1].userID + 1 : 1,
			username,
			password: sha256(password),
			birthdate,
			gender,
		};
		users.push(newUser);
		req.insert("todo", users);
		console.log(users);
		res.status(201).json({
			message: "The user successfully registered",
			token: jwt.sign({ userID: newUser.userID }, "SECRET_KEY"),
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports = {
	LOGIN,
	REGISTER,
};
