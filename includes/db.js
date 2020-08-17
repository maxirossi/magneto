var configDB = require('../config/config').dbConfig;

function connect ( mongoose, db = null ){

    let aDb;
    aDb = 'magneto';

    var mongoDB = `mongodb://${configDB.user}:${configDB.pwd}@${configDB.host}/${aDb}`;
   
    mongoose.connect( mongoDB, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true,
        useFindAndModify : false
    });
    
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    return db;
}

module.exports = {
    connect
}