
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://maiaa1993:12341234m@cluster0-lnrfd.mongodb.net/test?retryWrites=true&w=majority'
const config  =  require('../config')

module.exports = {
    getCollection
}

// Database Name
const dbName = 'guides_db';

var dbConn = null;

async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(uri, {useNewUrlParser: true});
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch(err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}




