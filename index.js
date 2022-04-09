const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require('dotenv').config()

const port = process.env.PORT;

app.use('/', express.static(path.join(__dirname, 'public')))
const TodosRouter = require("./todos/routes.config");
const TrackRouter = require("./track/routes.config");

app.use(cors());
app.use(express.json());

TodosRouter.routesConfig(app);
TrackRouter.routesConfig(app);

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});