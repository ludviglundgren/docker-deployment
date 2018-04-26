const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
		origin: '*',
		allowedHeaders: '*',
		methods: '*'
}));

app.get('/', (req, res) => res.json('Hello World! Built with Buddy.works ci/cd!!'));

app.listen(3000, () => {
		console.log("Hello world!")
});
