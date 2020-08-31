const mailgun = require("mailgun-js");
const DOMAIN = "sandbox8ade7752dbb54735b9993cdf9e0c62f2.mailgun.org";
const mg = mailgun({apiKey: "bee98a711e2297920a25a715dd84f003-07e45e2a-a0a7e384", domain: DOMAIN});
const data = {
	from: "Mailgun Sandbox <postmaster@sandbox8ade7752dbb54735b9993cdf9e0c62f2.mailgun.org>",
	to: "companybrowl@gmail.com",
	subject: "Hello",
	text: "Testing some Mailgun awesomness!"
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
