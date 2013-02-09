
/**
 * Module dependencies.
 */

var express = require('express')
  , connect = require('connect')
  , app = express()
  , http = require('http')
  , path = require('path')
  , db = require('./database/mongoose').MongooseConnector(app, true)
  , config = require('./config/app-config').appdata;

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.favicon());
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    require('./routes/nodebb');
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.use(express.logger('dev'));
    app.use(function(req, res, next){
        res.contentType('application/json');
        next();
    });
});

app.listen(config.port, function(){
    console.log("Express server listening on port " + config.port + ", running " + app.settings.env + " environment.");
});