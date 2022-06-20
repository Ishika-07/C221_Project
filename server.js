const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth:{
        user:"ishikarahu07@gmail.com",
        pass: "qgugymaqdlnlsfuh"
    },
    secure: true
})

server.listen(process.env.PORT || 3030);