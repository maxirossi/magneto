var configDB = require('../config/config').dbConfig;

function connect ( mongoose, db = null ){

    var mongoDB = `mongodb+srv://${configDB.user}:${configDB.pwd}@${configDB.host}/${configDB.database}?retryWrites=true&w=majority`;
    
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