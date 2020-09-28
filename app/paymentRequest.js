const config = require('./config.js');

const { parse } = require('querystring');

const hostname = config.hostname;
const port = config.port;

exports.homeContent = (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
    res.write('<title>Payment Request</title>');
    res.write('<style type="text/css" media="screen">');
    res.write('body{width:100%;margin:0 auto;background-color:#e4eff5}');
    res.write('.signupbox{margin:20px auto 0;padding:0;font:normal 12px arial;color:#555;background:#fff;border:1px solid #d0d0d0;border-radius:5px;-webkit-box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75);-moz-box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75);box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75)}');
    res.write('.signup-headingbg{background:#EC81E0;background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:5px 5px;height:35px;border-bottom:1px solid #dadada;font:bold 16px Tahoma;color:#fff;vertical-align:middle}');
    res.write('.signuptextfield:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}');
    res.write('.signupselectfield {width: 100%;background: #fff;padding: 10px;height: 2.5em;border: #555;border: 1px solid #ccc;border-radius: 4px;}');
    res.write('.signupbutton{background-color:#5469d4;border:1px solid #5469d4;width:40%;height:35px;font:bold 14px Tahoma;text-align:center;color:#fff;cursor:pointer;border-radius:5px}');
    res.write('.signupbutton:hover{background-color:#449d44;border:1px solid #398439;width:40%;height:35px;font:bold 14px Tahoma;text-align:center;color:#fff;cursor:pointer;border-radius:5px}');
    res.write('.borderleftradius{border-top-left-radius:5px}');
    res.write('.borderrightradius{border-top-right-radius:5px}');
    res.write('.gradientbg{background-image:-ms-linear-gradient(top,#FEFEFF 0%,#BFD3E1 100%);background-image:-moz-linear-gradient(top,#FEFEFF 0%,#BFD3E1 100%);background-image:-o-linear-gradient(top,#FEFEFF 0%,#BFD3E1 100%);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#FEFEFF),color-stop(1,#BFD3E1));background-image:-webkit-linear-gradient(top,#FEFEFF 0%,#BFD3E1 100%);background-image:linear-gradient(to bottom,#FEFEFF 0%,#BFD3E1 100%)}');
    res.write('.form-control {width: 60%;padding: 4px;}');
    res.write('.labelfont {padding: 4px;text-align: right;font-weight: bold;}');
    res.write('.new {padding: 5rem;font: normal 12px arial;color: #555;}');
    res.write('.new table {width: 50rem;border:1px solid #d0d0d0;border-radius:5px;-webkit-box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75);-moz-box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75);box-shadow:-1px 3px 8px -1px rgba(0,0,0,0.75)}');
    res.write('.signuptextfield {width: 98%;padding: 5px;font-size: 12px;font-family: "Verdana",sans-serif;color: #555;border: 1px solid #ccc;border-radius: 4px;-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);box-shadow: inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;}');
    res.write('</style>');
    res.write('</head>');
    res.write('<body>');
    res.write('<div class="new">');
    res.write('<form action="/redirect" method="post">');
    res.write('<table border="0" align="center" cellpadding="0" cellspacing="0" class="gradientbg">');
    res.write('<thead>');
    res.write('<tr>');
    res.write('<td colspan="3" align="center" valign="middle"></td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td colspan="3" align="center" valign="middle" class="signup-headingbg borderleftradius borderrightradius">Payment Request Page</td>');
    res.write('</tr>');
    res.write('</thead>');
    res.write('<tr>');
    res.write('<td align="right" valign="middle">&nbsp;</td>');
    res.write('<td align="center" valign="middle">&nbsp;</td>');
    res.write('<td align="center" valign="middle">&nbsp;</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">PAY ID: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="PAY_ID" class="signuptextfield" value="Paycaps PAYID Demo" autocomplete="off" readonly="" />');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">MERCHANT NAME: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="MERCHANTNAME" class="signuptextfield" value="Paycaps Demo" autocomplete="off"/>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">ORDER ID: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="ORDER_ID" class="signuptextfield" value="98765432108642" autocomplete="off" />');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">AMOUNT: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="AMOUNT" class="signuptextfield" value="1"  autocomplete="off"/>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">TXNTYPE: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="TXNTYPE" class="signuptextfield" value="SALE" autocomplete="off" readonly="" readonly="" />');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">MERCHANT PAYMENT TYPE: </td>');
    res.write('<td class="form-control">');
    res.write('<select name="MERCHANT_PAYMENT_TYPE" class="signupselectfield">');
    res.write('<option value="">Select Type</option>');
    res.write('<option value="CC">CC</option>');
    res.write('<option value="DC">DC</option>');
    res.write('<option value="NB">NB</option>');
    res.write('<option value="WL">WL</option>');
    res.write('</select>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">CUSTOMER NAME: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="CUST_NAME" class="signuptextfield" value="" autocomplete="off"/>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">CUSTOMER ADDRESS: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="CUST_STREET_ADDRESS1" class="signuptextfield" value="" autocomplete="off"/>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">CUSTOMER ZIP: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="CUST_ZIP" value="" class="signuptextfield" autocomplete="off"/>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">CUSTOMER PHONE: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="CUST_PHONE" value="" class="signuptextfield" autocomplete="off"/>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">CUSTOMER EMAILID: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="CUST_EMAIL" class="signuptextfield" value="user@demo.in" autocomplete="off"/>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">PRODUCT DESC: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="PRODUCT_DESC" class="signuptextfield" value="" autocomplete="off"/>');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">CURRENCY CODE: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="CURRENCY_CODE" class="signuptextfield" value="356" autocomplete="off" readonly="" />');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td class="labelfont">RETURN URL: </td>');
    res.write('<td class="form-control">');
    res.write('<input type="text" name="RETURN_URL" class="signuptextfield" value="" autocomplete="off"  readonly="" />');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td colspan="3" align="center" valign="middle">&nbsp;</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td colspan="3" align="center" valign="middle">');
    res.write('<input type="hidden" name="payment_check" value="true">');
    res.write('<input type="submit" name="button" id="button" class="signupbutton" value="Pay Now" onclick="javascript:submitForm()"/>                     ');
    res.write('</td>');
    res.write('</tr>');
    res.write('<tr>');
    res.write('<td colspan="3" align="center" valign="middle">&nbsp;</td>');
    res.write('</tr>');
    res.write('</table>');
    res.write('</form>');
    res.write('</div>');
    res.write('</body>');
    res.write('</html>');
    res.end();

};

exports.redirectContent = (req, res) => {
    postData = '';
        if(req.method === 'POST') {
            collectRequestData(req, result => {
                if (result) {
                    var data = {
                        AMOUNT: parseInt(result.AMOUNT) * 100,
                        CURRENCY_CODE: 356,
                        CUST_NAME: result.CUST_NAME,
                        CUST_EMAIL: result.CUST_EMAIL,
                        CUST_PHONE: result.CUST_PHONE,
                        CUST_STREET_ADDRESS1: 'Al Remah Tower Offices',
                        CUST_CITY: 'Khalidya AbuDhabi',
                        CUST_STATE: 'Khalidya AbuDhabi',
                        CUST_COUNTRY: 'UAE',
                        CUST_ZIP: '44',
                        CUST_SHIP_NAME: result.CUST_NAME,
                        CUST_SHIP_PHONE: result.CUST_PHONE,
                        CUST_SHIP_CITY: 'Khalidya AbuDhabi',
                        CUST_SHIP_STATE: 'Khalidya AbuDhabi',
                        CUST_SHIP_COUNTRY: 'UAE',
                        CUST_SHIP_STREET_ADDRESS1: 'C-94, Saraswati Kunj',
                        CUST_SHIP_ZIP: '44',
                        ORDER_ID: result.ORDER_ID,
                        PAY_ID: config.Paycaps_payid,
                        PRODUCT_DESC: result.PRODUCT_DESC,
                        RETURN_URL: 'http://' + hostname + ':' + port + '/response',
                        TXNTYPE: 'SALE'
                    }
                    var txn = config.createTransaction(data);
                    config.getPaymentUrl();
                    var gateway_url = config.endurl;
                    var form_html = '<form method="post" action="'+gateway_url+'" name="payForm">';
                    var formKeys = Object.keys(txn);
                    formKeys.forEach(function(key) {
                        form_html += '<input type="hidden" name="'+key+'" value="'+txn[key]+'"/>';
                    });
                    form_html += '</form><script type="text/javascript">document.payForm.submit();</script>';

                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<!DOCTYPE html><html><head><title>Demo Checkout Page</title></head><body><center><h1>Please wait</h1><p>Do not refresh this page...</p></center>');
                    res.write(form_html);
                    res.write('</body></html>');
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<!DOCTYPE html>');
                    res.write('<h2>Invalid Request</h2>');
                    res.end();
                }
            });
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h2>Invalid Request</h2>');
            res.end();
        }
};


exports.responseContent = (req, res) => {

    postData = '';
        if(req.method === 'POST') {
            collectRequestData(req, result => {
                if (result) {
                    var response_html = '<table border="1">';
                    var resultKeys = Object.keys(result);
                    resultKeys.forEach(function(key) {
                        response_html += '<tr><td>'+key+'</td><td>'+result[key]+'</td></tr>';
                    });
                    response_html += '</table>';

                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write("<style>td{padding:1em}</style>");
                    res.write("<center style='margin:3rem;'>"+response_html+"</center>");
                    res.end();
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<!DOCTYPE html>');
                    res.write('<h2>Invalid Request</h2>');
                    res.end();
                }
            });
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h2>Invalid Request</h2>');
            res.end();
        }

};

// Request data helper
function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if (request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    } else {
        callback(null);
    }
}