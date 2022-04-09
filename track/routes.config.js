/** Contain api routes of the application */

//const { Router } = require("express");
//const router = Router();

const {
  createTrack,
  getTrack
} = require("./controllers/index");

exports.routesConfig = function (app){
    app.post("/track/", createTrack);
    app.get("/track/", getTrack)
}