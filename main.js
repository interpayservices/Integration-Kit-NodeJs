const config = require('./app/config.js');
const payment = require('./app/paymentRequest.js');

const http = require('http');

const server = http.createServer((req, res) => {
    config.isProdMode(false);
    config.setCredentails(config.paycaps_payid, config.paycaps_salt);
    switch (req.url) {
        case "/":
            payment.homeContent(req, res);
            break;
        case "/redirect":
            payment.redirectContent(req, res);
            break;
        case "/response":
            payment.responseContent(req, res);
            break;
    }
});

const hostname = config.hostname;
const port = config.port;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});