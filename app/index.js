/**
 * Created by jiting on 15/4/22.
 */

var restify = require('restify');
var morgan = require('morgan');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var validator = require('validator');

var _db;
var url = 'mongodb://10.34.64.53:27017/demos';
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    _db = db;
    console.log("Connected to MongoDB:", url);
});

var server = restify.createServer();
server.use(morgan('dev'));
server.use(restify.bodyParser());


server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});

// this doesn't work, don't know why.
restify.defaultResponseHeaders = function (data) {
    console.log('running into defaultResponseHeaders()');
    this.header('Content-Type', 'application/json');
    this.charSet('utf-8');
};

server.post('/users', function (req, res, next) {
    newUser = JSON.parse(req.body);
    if (validator.isEmail(newUser.email) && !validator.isNull(newUser.password)) {
        var collection = _db.collection('users');
        collection.save(newUser, function (err, result) {
            assert.equal(err, null);
            console.log("Insert new user success: ", result.ops[0]._id);
            res.json(result.ops[0]);
        });
        return next();
    } else {
        res.send(new restify.BadRequestError('Invalid email or password.'));
    }
});

server.get('/users', function (req, res, next) {
    var collection = _db.collection('users');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found users: ", docs.length);
        res.json(docs);
    });
    return next();
});

server.get('/users/:id', function (req, res, next) {
    var collection = _db.collection('users');
    collection.findOne({_id: new ObjectID(req.params.id)}, function (err, user) {
        assert.equal(err, null);
        console.log("Found user: ", user);
        user ? res.json(user) : res.json({});
    });
    return next();
});

server.del('/users/:id', function (req, res, next) {
    var collection = _db.collection('users');
    collection.remove({_id: new ObjectID(req.params.id)}, function (err, result) {
        assert.equal(err, null);
        console.log('Deleted user, id: ', req.params.id);
        res.send();
    });
    return next();
});


