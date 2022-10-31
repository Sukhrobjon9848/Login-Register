const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
//MiddleWares
const modelMiddleWare = require("./middlewares/model.js");
const authRouter = require("./routes/auth.js");
const routerController = require("./routes/todos.js");

app.use(express.json());
app.use(modelMiddleWare);
app.use("/auth", authRouter);
app.use("/users", routerController);

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:" + PORT);
});
