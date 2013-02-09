var     mongoose = require('mongoose')
    ,   config = require('./../config/app-config.js').databases
    ,   BootStrapData = require('./../config/bootstrap-data').BootStrapData;

exports.MongooseConnector = function(app, bootstrap){
    if(mongoose.connection.db == null){
        mongoose.connect('mongodb://localhost/sandbox',
            function () {
            if(bootstrap){
                mongoose.connection.db.dropDatabase(
                    function(err){
                        new BootStrapData(app);
                    });
            }
        });
    }
};
