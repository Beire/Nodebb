var mongoose = require('mongoose'),
    ObjectId = require('mongoose').Types.ObjectId,
    Roles = require('./../database/schemas').Roles,
    User = require('./../database/schemas').User,
    config = require('./app-config').deployment;

BootStrapData = function(app){

    var deploy = app.settings.env;

    /*var SERVER_PATH = deploy.toString() == "production" ? config.linux : config.local;*/

    var errorCallback = function(err){
        if(err){
            console.log("Error saving data....");
            console.log(err)
        }};

    // Roles {USER, ADMIN}
    var userRole = new Roles({role: "USER"});
    userRole.save(errorCallback);
    var adminRole = new Roles({role: "ADMIN"});
    adminRole.save(errorCallback);

    var tester = new User({username: 'tester@mail.com',password: 'tester',enabled: true,account_expired: false,account_locked: false,password_expired: false,roles: [userRole]});
    tester.save(errorCallback);

    var nick = new User({username: 'nick@mail.com',password: 'password',enabled: true,account_expired: false,account_locked: false,password_expired: false,roles: [adminRole]});
    nick.save(errorCallback);
};

exports.BootStrapData = BootStrapData;