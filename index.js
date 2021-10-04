const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");

require("dotenv").config({ path: "./config/.env" });

const PORT = process.env.PORT || 5000;
const maxAge = 3 * 24 * 60 * 60 * 1000;
//ici on précise tout ce qu'on autorise

app.use(cors());

app.use(express.static("clientjs"));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/clientjs/index.html");
});

app.get("/setcookie", (req, res) => {
    res.cookie(`Cookie token name`, `encrypted cookie string Value`, {
        maxAge: 5000,
        // expires works the same as the maxAge
        expiresIn: maxAge,
        secure: true,
        httpOnly: true,
        sameSite: "lax",
    });
    res.send("Cookie have been saved successfully");
});

app.get("/deletecookie", (req, res) => {
    //show the saved cookies
    res.clearCookie();
    res.send("Cookie has been deleted successfully");
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

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
