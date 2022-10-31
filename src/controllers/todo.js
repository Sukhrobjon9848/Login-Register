const GET = (req, res) => {
	res.json(req.select("todo"));
};

const POST = (req, res) => {
	const data = req.body;
	res.json(req.insert("todo", data));
};

module.exports = {
	GET,
	POST,
};
