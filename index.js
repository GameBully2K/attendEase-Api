const express = require('express');
const https = require('https');
const fs = require('fs');
const date = new Date();
const time = date.getHours() + " : " + date.getMinutes();
const PORT = 443;

const options = {
    key: fs.readFileSync('certs/key.key'),
    cert: fs.readFileSync('certs/cert.pem')
};

const app = express();
const server = https.createServer(options, app);


app.listen(
    PORT,
    () => console.log("API is Runnig")
)

app.get('/', (req, res) => {
    res.status(200).send({
        API: "working"
    })
})

app.get('/checkTime', (req, res) => {
    res.status(200).send({
        time: time
    })
})