var request = require('request');
var sha256 = require('js-sha256');

module.exports = {

    hostname: 'localhost',   //127.0.0.1
    port: 8888,
    paycaps_payid: 'XXXXXXXXXXXXXXXXX',
    paycaps_salt: 'XXXXXXXXXXXXXXXXX',

    payment_url: {
        'prod': 'https://secure.interpayservice.com/pgui/jsp/paymentrequest',
        'Sandbox': 'https://sandbox.interpayservice.com/pgui/jsp/paymentrequest'
    },

    headers: {
        authorization: 'YOUR-AUTHORIZATION-HEADER'
    },

    credentails: {
        pay_id: 'YOUR-MERCHANT-KEY',
        salt: 'YOUR-SALT-KEY'
    },

    isProdMode: function(isProd) {
        if (isProd) {
            this.mode = 'prod';
        } else {
            this.mode = 'test';
        }
    },

    setCredentails: function(pay_id, salt) {
        this.credentails.pay_id = pay_id;
        this.credentails.salt = salt;
    },

    getPaymentUrl: function() {
        if (this.mode == 'prod') {
            this.endurl = this.payment_url.prod;
        } else {
            this.endurl = this.payment_url.test;
        }
    },

    generateHash: function(data) {
        var preHashString = "";
        var dataKeys = ['AMOUNT','CURRENCY_CODE','CUST_CITY','CUST_COUNTRY','CUST_EMAIL','CUST_NAME','CUST_PHONE','CUST_SHIP_CITY','CUST_SHIP_COUNTRY','CUST_SHIP_NAME','CUST_SHIP_PHONE','CUST_SHIP_STATE','CUST_SHIP_STREET_ADDRESS1','CUST_SHIP_ZIP','CUST_STATE','CUST_STREET_ADDRESS1','CUST_ZIP','ORDER_ID','PAY_ID','PRODUCT_DESC','RETURN_URL','TXNTYPE'];
        dataKeys.forEach(function(key) {
            preHashString += key+"="+data[key]+"~";
        });

        if (data['MERCHANT_PAYMENT_TYPE'] && data['MERCHANT_PAYMENT_TYPE'] != "") {
            preHashString += "MERCHANT_PAYMENT_TYPE="+data['MERCHANT_PAYMENT_TYPE']+"~";
        }

        preHashString = preHashString.substring(0, preHashString.length - 1); // remove extra ~

        return sha256(preHashString + this.credentails.salt).toUpperCase();
    },

    createTransaction: function(data) {
        var hash = this.generateHash(data);

        return Object.assign(data, {'HASH' : hash});
    }
};
