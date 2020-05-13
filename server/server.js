const express = require('express');
const sendEmail = require('./email/account');

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.post('/', async (req, res) => {
	try {
		const { from, subject, text } = req.body;
		await sendEmail(from, subject, text);
		res.status(200).send('bla');
	} catch (e) {
		console.log(e);
		res.status(400);
	}
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
