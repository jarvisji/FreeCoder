/**
 * Created by jiting on 15/4/22.
 */

var restify = require('restify');
var morgan = require('morgan');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer();
server.use(morgan('dev'));
server.use(restify.bodyParser());

server.post('/users', function (req, res, next) {
    console.log(req.body);
    res.send('Got post user request.');
    return next();
});
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});


