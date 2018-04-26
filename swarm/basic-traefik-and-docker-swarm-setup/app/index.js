const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
		origin: '*',
		allowedHeaders: '*',
		methods: '*'
}));

app.get('/', (req, res) => res.json('Hello World! Build with Buddy Ci!!'));

app.listen(3000, () => {
		console.log("Hello world!")
});
