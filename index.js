const express = require("express");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const path = require("path");

require("dotenv").config({ path: "./config/.env" });

const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

//ici on précise tout ce qu'on autorise
const corsOptions = {
    origin: "http://localhost:8080",
    credentials: true,
    optionSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

app.use(express.static("clientjs"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/clientjs/index.html");
});

app.post("/", (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    });

    const mailOptions = {
        from: req.body.email,
        to: "iam.elodie.muller@gmail.com",
        subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send("error");
        } else {
            console.log("Email sent:" + info.response);
            res.send("success");
        }
    });
});

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
        cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
    },
    app
);

sslServer.listen(PORT, () => console.log("it s Secure"));
