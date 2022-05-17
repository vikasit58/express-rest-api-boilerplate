const mongoose = require("mongoose");
require('dotenv').config();
var MONGODB = process.env.MONGODB_URL;

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
	 console.log("Mongo db connected...");
})
.catch(err => {
		console.error("Mongo connection failed:", err.message);
		process.exit(1);
});

module.exports = mongoose.connection;
