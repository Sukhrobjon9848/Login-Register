const path = require("path");
const fs = require("fs");
const model = (req, res, next) => {
	req.select = function (fileName) {
		const files = fs.readFileSync(
			path.join(process.cwd(), "src", "database", fileName + ".json"),
			"utf-8"
		);
		return files ? JSON.parse(files) : [];
	};

	req.insert = function (fileName, data) {
		files = fs.writeFileSync(
			path.join(process.cwd(), "src", "database", fileName + ".json"),
			JSON.stringify(data, null, 4)
		);
		return true;
	};
	return next();
};

module.exports = model;
