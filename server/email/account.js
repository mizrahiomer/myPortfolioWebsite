const sgMail = require('@sendgrid/mail');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

// const sendGridAPIKey = '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';

// sgMail.setApiKey(sendGridAPIKey);

const sendEmail = async (from, subject, text) => {
	transporter.sendMail({
		to: process.env.email,
		from,
		subject,
		text,
	});
	// try {
	// 	await sgMail.send({
	// 		to: 'mizrahiiomer@gmail.com',
	// 		from,
	// 		subject,
	// 		text,
	// 	});
	// } catch (e) {
	// 	console.log(e);
	// }
};

module.exports = sendEmail;
