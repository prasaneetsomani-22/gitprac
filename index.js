const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false })); 

const PORT = 5000;

app.get("/hello", (req, res) => {
	res.send("Hello world");
});


app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});


app.post("/", (req, res) => {
	console.log(req.body);
	res.send({ "Name": req.body["Name"], "Registration": req.body["reg_no"] })
})


app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
