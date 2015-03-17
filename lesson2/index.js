/**
 * Created by zvs on 3/17/15.
 */
var http = require("http");
var url = require('url');
var count = 0;

var server = new http.Server(
    function (req, res) {
        var parts = url.parse(req.url, true);
        var name = parts.pathname.replace("/", "");
        res.setHeader('Content-type', "text/html;charset=utf-8");

        switch(name)
        {
            case "index.html":
                count++;
                res.end("<h3>Привіт світ!</h3>");
                break;
            case "count.html":
                res.end("<h6>Кількість переглядів: "+ count + "</h6>");
                break;
            default: res.end("404 \"Page Not Found\"");
        }


    }
);
server.listen(9999, '127.0.0.1');