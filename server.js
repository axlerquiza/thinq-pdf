const connection = require('./src/utils/db');

const express = require("express");
const bodyParser = require("body-parser");

// const date = require(__dirname + "/date.js");
// const moment = require('moment');

const ot_R = require(__dirname + "/src/reports/ot_R.js");

const ftA_R = require(__dirname + "/src/reports/ftA_R.js");
const ftM_R = require(__dirname + "/src/reports/ftM_R.js");
const ftW_R = require(__dirname + "/src/reports/ftW_R.js");

const rftA_R = require(__dirname + "/src/reports/rftA_R.js");
const rftM_R = require(__dirname + "/src/reports/rftM_R.js");
const rftW_R = require(__dirname + "/src/reports/rftW_R.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    //const day = date.getDate();
    res.render("admin_homepage");
});

app.post('/ongoingTicketsReport', (req, res) => {
    ot_R.generatePDF(connection, "admin@ust.edu.ph", res);
});

app.post('/fulfilledTicketsReport', (req, res) => {
    ftA_R.generatePDF(connection, "admin@ust.edu.ph", res);
});

app.post('/fulfilledTicketsMonthlyReport', (req, res) => {
    ftM_R.generatePDF(connection, "admin@ust.edu.ph", res);
});

app.post('/fulfilledTicketsWeeklyReport', (req, res) => {
    ftW_R.generatePDF(connection, "admin@ust.edu.ph", res);
});

app.post('/ticketRatingsReport', (req, res) => {
    rftA_R.generatePDF(connection, "admin@ust.edu.ph", res);
});

app.post('/ticketRatingsMonthlyReport', (req, res) => {
    rftM_R.generatePDF(connection, "admin@ust.edu.ph", res);
});

app.post('/ticketRatingsWeeklyReport', (req, res) => {
    rftW_R.generatePDF(connection, "admin@ust.edu.ph", res);
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});