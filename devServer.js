const bodyParser = require("body-parser");
const morgan = require("morgan");
let cors = require("cors");
const express = require("express");
const app = express();
const {listen} = require("express/lib/application");

const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post("/api/login",(request, response) => {
    console.log(request.body);
    response.json("ok")
})

// eslint-disable-next-line no-undef
cors(server = app/listen(port, () => {
    console.log("dev server is running on port" + port)
}));