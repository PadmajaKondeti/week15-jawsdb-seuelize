// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "Njmitx123",
        database: "starwars"
    },

    jawsDB: {
        // port: 3306,
        // host: ' mysql://ssjab7cnbjby47f2:bmg1mjvr2qxfpzhp@tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ht1xvyt0aouo8zl1',
        // user: 'cm0zdmk2ez4igof5',
        // password: "yuhl98jsef0k7ul4",
        // database: "lghowl35ljxl5vao" 
        
    }
}

var connection = mysql.createConnection(process.env.JAWSDB_URL || source.localhost);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;